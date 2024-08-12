//1.1การดึงค่าไลบารี่express
const express = require('express')
//1.2ประกาศตัวแปร app คือตัวบริหารจัดการ express
const app = express()
//2.1เรียกใช้งานไลบารี่body-parserพื่อให้การส่งข้อมูลผ่าน body 
const bodyParser = require('body-parser')
//8.1
const mysql = require('mysql2/promise')
//9.1
const cors = require('cors')

//2.2
// app.use(bodyParser.text())
app.use(bodyParser.json())
//9.2
app.use(cors())

//1.3ประกาศตัวแปรport
const port = 8000

//8.3ประกาศตัวแปรconn
let conn = null

//8.4สร้างฟังก์ชั่นinitMySQเพื่อติดต่อฐานข้อมูล
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tutorials',
    port: '3306'
  })
}

//10.1เพิ่ม function สำหรับการ validate ขึ้นมา
const validateData = (userData) => {
  let errors = []
  if (!userData.firstname) {
    errors.push('กรุณาใส่ชื่อจริง')
  }
  if (!userData.lastname) {
    errors.push('กรุณาใส่นามสกุล')
  }
  if (!userData.age) {
    errors.push('กรุณาใส่อายุ')
  }
  if (!userData.gender) {
    errors.push('กรุณาเลือกเพศ')
  }
  if (!userData.interests) {
      errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 อย่าง')
    }
  if (!userData.description) {
    errors.push('กรุณาใส่คำอธิบายของคุณ')
  }
  return errors
}

//8.2 path = GET /testdb แบบปัจจุบัน async, await นิยมใช้
app.get('/testdb-new', async (req, res) => {
  try { //ทำการลองก่อน ทำจากบนลงล่าง
    //8.6เรียกใช้connได้เลย
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
  } catch (error) {
    console.error('Error fetching users: ', error.message)
    res.status(500).json({ error: 'Error fetching users' })
  }
  //ต่อได้เลย
})

//4.1path = GET /users สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', async (req, res) => {
  //8.6เรียกใช้connได้เลย
  const results = await conn.query('SELECT * FROM users')
  res.json(results[0])
})


//path = เพิ่มข้อมูล POST /users สำหรับการสร้าง users ใหม่บันทึกเข้าไป
//req คือ ตัวแปรที่clientร้องขอมายังserver
//res คือ ตัวแปรที่serverส่งกับไปให้client
//2.3
app.post('/users', async (req, res) => {
  //3.2
  try {
    let user = req.body

    // เพิ่ม code สำหรับ validate
    const errors = validateData(user)
    if (errors.length > 0) {
      throw {
        message: 'กรอกข้อมูลไม่ครบ',
        errors: errors
      }
    }

    const results = await conn.query('INSERT INTO users SET ?', user)
    res.json({
      message: 'insert ok',
      data: results[0]
    })
  } catch (error) {
    const message = error.errorMessage || 'กรอกข้อมูลไม่ครบ & Something Wrong'
    console.error('error message', error.message)
    res.status(500).json({
      message: message,
      errors: error.errors || []
    })
  }
})

//4.1path =แสดงข้อมูลรายคน GET /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
  try {
    let id = req.params.id
    const results = await conn.query('SELECT * FROM users WHERE id = ?', id)
    if (results[0].length == 0) {
      throw { statusCode: 404, message: 'หาไม่เจอ'}
    } 
    res.json(results[0][0])
  } catch (error) {
    console.error('error message', error.message)
    let statusCode = error.statusCode || 500
    res.status(500).json({
      message: 'something wrong',
      errorMessage: error.message
    })
  }
  
})

//5.1path =แก้ไขข้อมู PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {
  try {
    let id = req.params.id
    let updateUser = req.body
    const results = await conn.query(
      'UPDATE users SET ? WHERE id = ?', 
      [updateUser, id]
    )
    res.json({
      message: 'update ok',
      data: results[0]
    })
  } catch (error) {
    console.error('error message', error.message)
    res.status(500).json({
      message: 'somethin wrong',
    })
  }
})


//7.1path = ลบข้อมูล DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', async (req, res) => {
  try {
    let id = req.params.id
    const results = await conn.query('DELETE FROM users WHERE id = ?', parseInt(id))
    res.json({
      message: 'delete ok',
      data: results[0]
    })
  } catch (error) {
    console.error('error message', error.message)
    res.status(500).json({
      message: 'somethin wrong',
    })
  }
})

//8.5เรียกใช้ฟังก์ชันinitMySQL
//1.5กำหนด
app.listen(port, async (req, res) => {
  await initMySQL()
  console.log('http server run at port:' + port)
})