//====================================
//Funtion คือ ใส่สิ่งที่เหมือนๆกันเข้าไปรวมเป็นคำสั่งใหม่

let score1 = 50
let score2 = 60

//ประกาศฟังก์ชั่น,
// function calculation_grade (score) {
//ประกาศแบบ arrow function
let calculation_grade = (score) => {
    if (score >= 80) {
        grade = 'A'
    } else if (score >= 70) {
        grade = 'B'
    } else if (score >= 60) {
        grade = 'C'
    } else if (score >= 50) {
        grade = 'D'
    } else {
        grade = 'F'
    }
    return grade
}

//ใช้ฟังก์ชั่น
let grade1 = calculation_grade (score1)
let grade2 = calculation_grade (score2)
console.log('Grade: ', grade1, grade2)