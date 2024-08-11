//====================================
//Parameter Funtion คือ 
//Array

// let score = [10, 20, 30, 40]

// //วนลูปอาร์เรย์
// for (let item = 0; item < score.length; item++) {
//     console.log('Score: ', score[item])
// }

// score.forEach((s) => {
//     console.log('Score: ', s)
// })

// score[0] = score[0] * 2
// score[1] = score[1] * 2
// score[2] = score[2] * 2
// score[3] = score[3] * 2

//map 
// score = score.map((s) => {
//     return s * 2
// })

// score.forEach((s) => {
//     console.log('New score: ', s)
// })


// let score = [10, 20, 30, 40]
// let newScore = []

// //วนลูปอาร์เรย์
// for (let item = 0; item < score.length; item++) {
//     console.log('Score: ', score[item])
//     if (score[item] >= 30) {
//         newScore.push(score[item])
//     }
// }

// newScore.forEach((ns) => {
//     console.log('New score: ', ns)
// })

//filter
// let score = [10, 20, 30, 40]

// //วนลูปอาร์เรย์
// for (let item = 0; item < score.length; item++) {
//     console.log('Score: ', score[item])
// }

// // let newScore = score.filter((s) => {
// //     if (s >= 30) {
// //         return true
// //     } else {
// //         return false
// //     }
// // })
// //แปลงเป็นแบบสั้นๆ
// let newScore = score.filter((s) => {
//     return s >= 30
// })

// newScore.forEach((ns) => {
//     console.log('New score: ', ns)
// })

//Object Function
let students = [
    {
        name: 'tanes',
        score: 50,
        grade: 'A'
    },
    {
        name: 'tuk',
        score: 60,
        grade: 'B'
    },
    {
        name: 'tang',
        score: 65,
        grade: 'B'
    }
]

let student = students.find((s) => {
    if (s.name == 'tuk') {
        return true
    }
})

// //เพิ่มค่าคูณ2ในตัวแปรscore
// let doublescore_student = students.map((s) => {
//     s.score = s.score * 2
//     return s
// })

//filter
let highScore_student = students.filter((s) => {
    if (s.score >= 60) {
        return true
    }
})

console.log('student: ', student)

// console.log('doublescore_student: ', doublescore_student)
console.log('highScore_student: ', highScore_student)