const BASE_URL = 'http://localhost:8000'

let mode = 'CREATE' //default
let selectedId = ''

window.onload = async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  console.log('id', id)
  if (id) {
    mode = 'EDIT'
    selectedId = id

    //1เราจะดึงข้อมูลuserเก่าออกมาก่อน
    try {
      const response = await axios.get(`${BASE_URL}/users/${id}`)
      console.log('data', response.data)
      const user = response.data

      //2เราจะนำข้อมูลuserกลับใส่เข้าไปในinput html
      let firstNameDOM = document.querySelector('input[name=firstname]')
      let lastNameDOM = document.querySelector('input[name=lastname]')
      let ageDOM = document.querySelector('input[name=age]')
      let descriptionDOM = document.querySelector('textarea[name=description]')

      firstNameDOM.value = user.firstname
      lastNameDOM.value = user.lastname
      ageDOM.value = user.age
      descriptionDOM.value = user.description

      let genderDOMs = document.querySelectorAll('input[name=gender]')
      let interestDOMs = document.querySelectorAll('input[name=interest]')

      for (let i = 0; i < genderDOMs.length; i++) {
        if (genderDOMs[i].value == user.gender) {
          genderDOMs[i].checked = true
        }
      }

      for (let i = 0; i < interestDOMs.length; i++) {
        if (user.interests.includes(interestDOMs[i].value)) {
          interestDOMs[i].checked = true
        }
      }

    } catch (error) {
      console.log('error', error)
    }

    
  }
}

//เพิ่ม function สำหรับการ validate ขึ้นมา
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

//1.1สร้างฟังก์ชั่น onclick="submitData()" ที่ปุ่มส่งข้อมูล
const submitData = async () => {
    let firstnameDOM = document.querySelector('input[name=firstname]')
    let lastnameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked') || {}
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked') || {}

    let descriptionDOM = document.querySelector('textarea[name=description]')

    let messageDOM = document.getElementById('response-message')

    try {
        let interest = ''

        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            //ผมจะใส่ลูกน้ำ เมื่อตัวนี้ไม่ใช่ตัวสุดท้าย
            if (i != interestDOMs.length - 1) {
                interest += ', '
            }
        }

        let userData = {
            firstname: firstnameDOM.value,
            lastname: lastnameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }

        //1.1
        // console.log('Submit data', userData)

        // เพิ่มการเรียกใช้ validate ขึ้นมา
        const errors = validateData(userData)

        // ถ้าเจอ error อย่างน้อย 1 ตัว
        if (errors.length > 0) {
            // มีerrorเกิดขึ้น
            throw {
                message: 'กรอกข้อมูลไม่ครบ',
                errors: errors
            }
        }
        

        let message = 'บันทึกข้อมูลเรียบร้อย'

        // const response = await axios.post(
        //     'http://localhost:8000/users', 
        //     userData
        // )
        if (mode == 'CREATE') {
          const response = await axios.post(`${BASE_URL}/users`, userData)
          console.log('response', response.data)
        } else {
          const response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData)
          message = 'แก้ไขข้อมูลเรียบร้อย'
          console.log('response', response.data)
        }
        

        messageDOM.innerText = message
        messageDOM.className = 'message success'

        } catch (error) {
            console.log('error message', error.message)
            console.log('error', error.errors)
            if (error.response) {
                console.log(error.response)
                error.message = error.response.data.message
                error.errors = error.response.data.errors
            }

            let htmlData = '<div>'
            htmlData += `<div>${error.message}</div>`
            htmlData += '<ul>'
            for (let i = 0; i < error.errors.length; i++) {
                htmlData += `<li>${error.errors[i]}</li>`
            }
            htmlData += '</div>'

            messageDOM.innerHTML = htmlData
            messageDOM.className = 'message danger'
        }
}

