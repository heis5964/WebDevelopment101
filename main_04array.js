//====================================
//Array เป็นlistของข้อมูล


//ประกาศตัวแปรอาร์เรย์เก็บข้อมูลมากกว่าหนึ่งตัว
// let age1 = 58
// let age2 = 59
// let age3 = 60

// console.log('age', age1, age2, age3)

// let ages = [58, 59, 60] // Array 3 items ตำแหน่งเริ่มต้นที่0
// console.log('New age', ages[0]) //ผลลัพภ์พ่น 58 ออกมา
// console.log('New age', ages[2]) //ผลลัพภ์พ่น 60 ออกมา
// console.log('Age list', ages)

// //การเปลี่ยนแปลงตัวแปรอาร์เรย์
// //1แทนที่
// ages = [45, 50]
// console.log('Age list', ages)

// //2ต่ออาร์เรย์
// ages.push(55)
// console.log('Age list', ages)

// //3เอาอาร์เรย์ออก เป็นการดึงตัวสุดท้ายออกไป
// ages.pop()
// console.log('Age list', ages)


//ต้องการค้นหาว่ามีตัวเลข40อยู่จริงไหม
// let ages = [30, 35, 40, 45, 50]
// if (ages.includes(40)) { //true
//     console.log('You have 40 in list')
// }

//การเรียงลำดับอาร์เรย์
let ages = [35, 14, 30]

console.log('New age', ages)

//การเรียบลำดับจากน้อยไปมาก
ages.sort()
console.log('New age', ages)

let name_list = ['nes', 'tuk', 'tang', 'chumpu']
console.log('Name list', name_list)
console.log('Name list', name_list.length)

for (let index = 0; index < name_list.length; index++) {
    console.log('Name list', name_list[index])
}