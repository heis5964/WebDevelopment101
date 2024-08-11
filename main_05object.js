//====================================
//Object คือตัวแปรที่เก็บข้อมูลมากกว่าหนึ่งประเภทได้
//Object ประกอบด้วยค่าสองค่า 1.คีย์ 2.ค่าของข้อมูล
// let student = {
//     age: 30,
//     name: 'tanes',
//     grade: 'A'
// }

// console.log(student)
// //การเข้าถึงแต่ละตัวแปร
// console.log(student.name)
// console.log(student.age)
// console.log(student.grade)

// let age1 = 30
// let name1 = 'tanes'
// let grade1 = 'A'

//Object สามารถใช้งานร่วมกับอาร์เรย์ได้
let student = [{
    age: 30,
    name: 'tanes',
    grade: 'A'
}, {
    age: 35,
    name: 'tuk',
    grade: 'B'
}]

//การเพิ่มObject
student.push({
    name: 'tane',
    age: 40,
    grade: 'C'
})

//การลบObjectสุดท้ายออกไป
student.pop()


//การวนloopพ่นออกมา
for (let item = 0; item < student.length; item++) {
    console.log('Student number: ', item+1)
    console.log('Name: ', student[item].name)
    console.log('Name: ', student[item].age)
    console.log('Name: ', student[item].grade)
}


