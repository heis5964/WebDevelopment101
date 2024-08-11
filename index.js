//1ดึงฟอร์มออกมาทั้งหมดก่อน
//1.1สร้างฟังก์ชั่น onclick="submitData()" ที่ปุ่มส่งข้อมูล
function submitData () {
    let firstnameDOM = document.querySelector('input[name=firstname]')
    let lastnameDOM = document.querySelector('input[name=lastname]')
    let ageDOM = document.querySelector('input[name=age]')

    let genderDOM = document.querySelector('input[name=gender]:checked')
    let interestDOMs = document.querySelectorAll('input[name=interest]:checked')

    let descriptionDOM = document.querySelector('textarea[name=description]')

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
        genderDOM: genderDOM.value,
        descriptionDOM: descriptionDOM.value,
        interest: interest
    }

    console.log('Submit data', userData)
}

//1.2