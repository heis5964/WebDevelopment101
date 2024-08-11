//====================================
/*
+ บวก
- ลบ
* คูณ
/ หาร
% หารเหลือเศษ(mod)
*/

// let number1 = 5
// let number2 = 10
// let number3 = number1 + number2
// console.log('new number is', number3)

// let number1 = 5
// let number2 = 3
// let number3 = number1 > number2
// console.log('result of condition is', number3)

//====================================
// let number1 = 5
// let number2 = 5

// // if - else condition
// if (number1 != number2) {
//     console.log('this is if')
// } else if (number1 == number2) {
//     console.log('this is else if')
// } else {
//     console.log('this is else')
// }

// let number1 = 5
// let number2 = 5

// if - else condition
// if (number1 != number2) {//false
//     console.log('this is if')
// } else if (number1 == number2) {
//     console.log('this is else if')//พ่นออกมา เพราะเป็นจริงTrue
// } else {
//     console.log('this is else')
// }
//====================================
/*
Grade
>= 80 เป็นเกรด A
>= 70 เป็นเกรด B
>= 60 เป็นเกรด C
>= 50 เป็นเกรด D
*/

// let score = 65
// let score = prompt('ใส่คะแนนของคุณ')
// console.log('You have score:', score)

//if - else condition
// if (score >= 80) { //false
//     console.log('You are A.')
// } else if (score >= 70) { //false
//     console.log('You are B.')
// } else if (score >= 60) { //true
//     console.log('You are C.') //พ่นข้อมูลออกมา
// } else if (score >= 50) {
//     console.log('You are D.')
// } else {
//     console.log('You are F.')
// }
//====================================

/*
&& และ
|| หรือ
! not หรือ ไม่

*/
// let number1 = 5
// let number2 = 8

//true && true = เป็นจริง เป็นจริงทั้งสองกรณีหรือทุกกรณีต้องเป็นจริง
// let condition = number1 >= 3 && number2 >= 5
// console.log('Result of condition: ', condition) //true

//true || false = เป็นจริง กรณีใดกรณีหนึ่งเป็นจริง
// let condition = number1 >= 3 || number2 >= 10
// console.log('Result of condition: ', condition) //true

// let age = 30
// let gender = 'male'

//true && true = เป็นจริง
// if (age >= 20 || gender == 'male') {
//     console.log('You are male adult.')
// }

//true || false = เป็นเท็จ กรณีใดกรณีหนึ่งเป็นจริง
// let condition = !(number1 >= 3 || number2 >= 10)
// console.log('Result of condition: ', condition) //false

// let age = 30
// let gender = 'male'

//true && true = เป็นจริง
// if (age >= 20 || gender == 'male') {
//     console.log('You are male adult.')
// }
//====================================
//ต้องการหาตัวเลขหารสองลงตัว
// let number = 20
// if (number % 2 == 0) {
//     console.log('You are even.')
// }


//ต้องการหาตัวเลขหารสองเป็นเลขคี่
let number1 = 21
let number2 = 5
let number3 = number1 % number2
console.log(number3)

//ต้องการหาตัวเลขหารสองเป็นเลขคี่
let number = 21
if (!(number % 2 == 0)) {
    console.log('You are odd.')
}
//====================================