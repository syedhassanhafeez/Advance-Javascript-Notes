//Object Destructuring
var students={
    name: "Hassan",
    profession: "Developer",
    age: 20
}
let {profession,age,name} = students;
console.log(students);
/*************************************************************************** */

// Array Destructuring

// var nameList =["Hassan","Haris","Wasay","Anus"]
// var [firstName,secondName,thirdName,fourthName] = nameList;
// console.log(firstName,secondName,thirdName,fourthName);
/*************************************************************************** */

// Array Destructuring (but in this example ASSIGNMENT VARIABLES is destructure)
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); //Assigning the rest of an array to a variable
// expected output: Array [30,40,50]