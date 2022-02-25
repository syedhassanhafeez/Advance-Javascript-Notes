

/*************************************************************************** */
// TEMPLATE LITERAL
// var firstname = "Syed";
// var lastname = "Hassan";
// console.log(`FULL NAME: ${firstname} ${lastname} Bin Hafeez` );

/*************************************************************************** */
// spread operator
// array example
// var students1 = ["ghous","basit"]
// var students2 = [...students1,"hassan","haris"]
// console.log(students2);

/*************************************************************************** */
// spread operator
// object example
// var students1 = {name:"basit"}
// var students2 = {...students1,schoolName:"Happy Home"}
// console.log(students2);
/*************************************************************************** */

//Object Destructuring
// var students={
//     name: "Hassan",
//     profession: "Developer",
//     age: 20
// }
// let {profession,age,name} = students;
// console.log(profession,age,name);

// Array Destructuring

// var nameList =["Hassan","Haris","Wasay","Anus"]
// var [firstName,secondName,thirdName,fourthName]=nameList;
// console.log(firstName,secondName,thirdName,fourthName);

/*************************************************************************** */
// Ternary Operators
// Normal if else
// var age = 30;
// if(age > 30){
//     console.log("30 se bara hai");  
// }else{
//     console.log("30 se chota hai");
// }

// Use Ternary Operator (?)
// var age = 40
// var check = 
// age > 30  ? // if
// "30 se bara hai" 
// :           // else
// "50 se bara hai"
// console.log(check);
/************************************************************************ */
// var age = 40
// var check = 
// age > 30 && age < 50 ? // if
// "30 se bara hai" 
// :
// age > 50 ?    // else-if 
// "50 se bara hai"
// :             // else
// "1-30 ki range mai hai"
// console.log(check);
/*************************************************************************** */

// Short Circuit
// let gender = "male";

// let msg1 = (gender === "male") && ("short circuit not Works")
// let msg2 = (gender === "female") || ("short circuit Works")

// console.log(msg1);
// console.log(msg2);

/***************************************************************************** */
// Async and Sync
// Async sequence manner mai task ko perform nhi krta. agr koi chiz execute hona mai time lgraha hoga to compiler usko chorkr aaga brjaiga.
//Sync aik aik krka task perform krta hai. In a sequence manner.

// Example No. 1 about Asyncronous javascript
// setTimeout(function(){
//     console.log("Number 1");
// },1000)
// console.log("Number 2");
// console.log("Number 3");

// var name1;
// setTimeout(function () {
//     name1= "Hassan"
// }, 2000)
// setInterval(() => {
//     console.log(name1);

// }, 1000);

// Promise ==> Three functions
// resolve, reject,pending

// Example no.1 both resolve & reject
// var promise = new Promise(function (resolve, reject) {
//     var available = "Zinger"
//     if (available === "Zinger") {
//         resolve("Han bhai treat dedi");

//     }
//     else {
//         reject("Nahi khilaya");
//     }
// })
// promise.then(function(data){
//     console.log("Resolve==> ",data);
// })
// .catch(function(error) {
//     console.log("Reject==> ",error);
// })



// function Student(name,roll){
//     this.name=name;
//     this.roll = roll;

// }
// Student.prototype.getname=function(){
//     return this.name
// }
// var student1 = new Student("Hassan",12345)

// console.log(student1);

// var promise = new Promise(function (resolve, reject) {

//     firebase.database().ref("users").on("child_added", function (data) {
//         if(data.val()){
//             resolve(data.val)
//         }else{
//             reject("something went wrong")
//         }

//     })
// })
// promise.then(function(data) {
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);

// })


// Example no.2 ==> Pending
// var promise = new Promise(function (resolve, reject) {
//     if (true) {
//         setTimeout(() => {
            
//             resolve("It's resolve");
//         }, 3000);

//     }
//     else {
//         reject("reject");
//     }
