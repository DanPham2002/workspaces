// // khai bao bien
// var fullName = 'Pham Van Dan'
// var age = 20
// var job = 'student'
// var school = 'HUCE'
// // hien thi thong bao
// //  alert (fullName) 
// // alert (age)
// // alert (job)
// // alert(school)
// // console.log('day la thong bao')
// // confirm('xac nhan ban da du tuoi')
// // prompt('ban bao nhieu tuoi roi')
// // setTimeout(function() {
// //     alert('day la thong bao')
// // }, 2000)
// // setInterval(function() {
// //     console.log('day la log'+ Math.random)
// // },1000 )
// // var a = 1
// // var b = 2
// // if(a>b) {
// //     alert('dung')
// // }
// /**
//  * lưu ý khi dùng các phép toán tử ++ hay --
//  * các phép toán này có hai trường hợp tiền tố và hậu tố
//  * ví dụ như  tiền tố thì thực hiện hai việc 
//  * Việc 1: copy giá trị của biến a sau đó  rồi đem 1 + a
//  * Việc 2: trả về giá trị của a sau khi đã thực hiện phép toán
//  * đối với hậu tố thì thực hiện 3 bước 
//  * Việc 1: biến "a copy" rôi sau đó cũng cộng vs 1
//  * Viêcj 2: a = a+1 => gía trị của a 
//  * Việc 3: trả về giá trị của biến a copy ban đầu 
//  */
// // var a = 5
// // var output = a++
// // console.log('output = ',  output)
// // var Name = 'Dan'
// // Name += ' Pham'
// // console.log(Name)
// // var fullName = 'Pham Van Dan'
// // if(fullName)
// // {
// //     console.log("Dieu kien dung")
// // }
// // var a = 1 
// // var b = 2
// // var c = 3
// // if(a > b || b < c){
// //       console.log('Dieu kien dung')
// // }
// // Các kiểu dữ liệu có trong javascript
// // *kiểu dữ liệu nguyên thủy
// // kiểu số 
// var a = 1
// var b = 2
// console.log(a)
// // kiểu kí tự 
// var fullName = 'Pham Van Dan'
// console.log(fullName)
// // Kiểu boolean
// var isSuccess = true
// console.log(isSuccess)
// // Kiểu null
// var isNull = null
// console.log(isNull)
// // Kiểu Symbol
// var mssv = Symbol('id')
// console.log(mssv)
// // Kiểu underfined
// var age

// Các kiểu dữ liệu phức tạp
// Kiểu Function
// var myFunction = function()
// {
//     alert('Hi. Xin chao tat ca moi nguoi!')
// }
// myFunction()
// Kiểu Object
//* Object
// var isObject = {
//     name: 'Pham Van Dan',
//     age: 20,
//     id: 31265
// }
// console.log(isObject)
// //* Kiểu Array
// var isArray = [
//     'Pham Van Dan',
//     20,
//     31265
// ]
// console.log(isArray)
// console.log(typeof mssv)
/**
 * 0
 * ''
 * ""
 * undefined
 * null
 * false
 */
// var result = null || undefined || 0
// console.log(result)
// if(result){
//     console.log('DIEU KIEN DUNG')
// }
// else{
//     console.log('DIEU KIEN SAI')
// }
// function writeLog(message, message_2) {
//     console.log(message,message_2)
// }
// writeLog('Day la thong bao ', 'thong bao cai gi')
// function writeLog(){
//     console.log(arguments)
// }
// writeLog(1,2,3,4,5)
// function loop(){
//     myString = ""    
//     for(var vongLap of arguments ){
//        myString +=  `${vongLap}-`
//     }
//     console.log(myString)
// }
// loop('log1', 'log2', 'log3', 'log4','log5')

