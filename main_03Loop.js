//====================================
//loop เป็นการกระทำซ้ำจนกระทั้งเป็นเท็จ
/*
while
for
*/

//กรณีต้องการให้แสดงข้อความสิบครั้ง
let counter = 0

//จะทำงานตามเงื่อนไขในวงเว็บกรณีเป็นจริงเสมอจนกลายเป็นจริง
while (counter < 10) { //true --> false
    console.log('Hello world')
    // counter = counter+1 //จะทำจากทางขวาไปซ้ายมือ รอบที่ 1 couter = 0+1 เป็นการกระทำให้การทำงานจนเป็นเท็จคือการเพิ่มcouterไปเรื่อยๆ
    // counter += 1
    counter++
}


for (let counter = 0; counter < 10; counter = counter+1) {
    console.log('Hello world')
}