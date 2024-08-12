//1.1การดึงค่าไลบารี่express
const express = require('express')
//1.2ประกาศตัวแปร app คือตัวบริหารจัดการ express
const app = express()
//2.1เรียกใช้งานไลบารี่body-parserพื่อให้การส่งข้อมูลผ่าน body 
const bodyParser = require('body-parser')
//8.1
const mysql = require('mysql2/promise')

//2.2
// app.use(bodyParser.text())
app.use(bodyParser.json())

//1.3
const port = 8000

//3.1 สำหรับเก็บ users
let users = []
//5.2
let counter = 1

//8.2 path = GET /testdb แบบเก่าแบบ Promise
app.get('/testdb', (req, res) => {
  //8.3ประกาศcreateConnection
  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tutorials',
    port: '3306'
  }) .then((conn) => {
    conn
    .query('SELECT * FROM users')
    .then((results) => {
      res.json(results[0])
    })
    .catch((error) => {
      console.error('Error fetching users: ', error.message)
      res.status(500).json({ error: 'Error fetching users' })
    })
  })
})

//8.2 path = GET /testdb แบบปัจจุบัน async, await นิยมใช้
app.get('/testdb-new', async (req, res) => {
  try { //ทำการลองก่อน ทำจากบนลงล่าง
    const conn = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tutorials',
      port: '3306'
    })
    const results = await conn.query('SELECT idc FROM users')
    res.json(results[0])
  } catch (error) {
    console.error('Error fetching users: ', error.message)
    res.status(500).json({ error: 'Error fetching users' })
  }
  //ต่อได้เลย
})

//4.1path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', (req, res) => {
  const filterUsers = users.map(user => {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      fullname: user.firstname + ' ' + user.lastname
    }
  })
  res.json(filterUsers)
})


//path = POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
//req คือ ตัวแปรที่clientร้องขอมายังserver
//res คือ ตัวแปรที่serverส่งกับไปให้client
//2.3
app.post('/user', (req, res) => {
  //3.2
  let user = req.body
  //5.3
  user.id = counter
  counter += 1

  //3.3เพิ่มตัวแปรอาร์เรย์
  users.push(user)
  res.json({
    message: 'add ok',
    user: user
  })
  //2.4
  // res.send(req.body)
})

//4.1path = GET /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users/:id', (req, res) => {
  let id = req.params.id

  //หาก่อนว่าindexของuserที่จะค้นหาคือindexไหน
  let selectedIndex = users.findIndex(user => user.id == id)

  //หาindex
  res.json(users[selectedIndex])
})

//5.1path = PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/user/:id', (req, res) => {
  let id = req.params.id

  //5.6
  let updateUser = req.body

  //5.4ค้นหาข้อมูล users
  let selectedIndex = users.findIndex(user => user.id == id)

  //5.7updateข้อมูลuser
  users[selectedIndex].firstname = updateUser.firstname ||  users[selectedIndex].firstname
  users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname
  users[selectedIndex].age = updateUser.age || users[selectedIndex].lastname
  users[selectedIndex].gender = updateUser.gender || users[selectedIndex].lastname

  //5.8update
  res.json({
    message: 'update user complete!',
    data: {
      user: updateUser,
      indexUpdate: selectedIndex 
    }
  })

  //5.5ค้นหาuser
  // res.send(selectedIndex + '')
})


//6.1path = PATCH /user/:id แก้ไขข้อมูลบางฟิลด์ สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.patch('/user/:id', (req, res) => {
  let id = req.params.id

  //6.6
  let updateUser = req.body

  //6.4ค้นหาข้อมูล users
  let selectedIndex = users.findIndex(user => user.id == id)

  //6.7updateข้อมูลuser
  if (updateUser.firstname) {
    users[selectedIndex].firstname = updateUser.firstname 
  }
  
  if (updateUser.lastname) {
    users[selectedIndex].lastname = updateUser.lastname 
  }
  
  //6.8update
  res.json({
    message: 'update user complete!',
    data: {
      user: updateUser,
      indexUpdate: selectedIndex 
    }
  })

  //5.5ค้นหาuser
  // res.send(selectedIndex + '')
})

//7.1path DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', (req, res) => {
  let id = req.params.id 
  //หาก่อนว่า index ของ user ที่จะลบคือ index ไหน
  //7.2ค้นหาข้อมูล users
  let selectedIndex = users.findIndex(user => user.id == id)

  //7.3ลบ users ออก
  // delete users[selectedIndex]
  users.splice(selectedIndex, 1)

  //7.4
  res.json({
    message: 'delete complete!',
    indexDeleted: selectedIndex 
  })

})


//1.5กำหนด
app.listen(port, (req, res) => {
  console.log('http server run at port:' + port)
})