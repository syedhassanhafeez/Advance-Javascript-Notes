//In ES5
//Constructor function ka keyword ka Hamasha pehla letter Capital likhta hai. Or (new) keyword bhi lagata hain.
// function Student(name,email){
//     this.name = name;
//     this.email = email
// }
// let student1 = new Student("hassan","hassan@gamil.com")
// console.log(student1);

//In ES6
//Example #1
// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }
// }
// let student1 = new Student("hassan","hassan@gamil.com")
// console.log(student1);


//Example #2 "Merge Two Classes"
// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email
//     }
// }
// class School extends Student{
//     constructor(name,email,school1){      // And also get in constructor in above class data get in this class
//         super(name,email);               //super keyword is used because above class data get in this class.
//         this.school = school1
// }}

// let student1 = new School("hassan","hassan@gamil.com","Programmer")
// console.log(student1);
