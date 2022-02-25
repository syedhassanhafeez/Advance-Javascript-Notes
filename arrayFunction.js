// Array Function. In ES5 we are using push, splice, slice
// In ES6
let arr = [{name:"Hassan",age:20},{name:"Wasay",age:22}];
let bag = arr.filter(a=>{
    return a.age===22
})
console.log(bag);

//Array Map
//render and updated
//Example #1
// let arr=[2,3,4,5];
// console.log(arr);
// let multiply = arr.map((a)=>{ return a*2})
// console.log(multiply);

//Example #2 (Single parameter agr ho to bracket ki bhi zarrorat nhi hoti arrow function mai.
// let arr=[{name:"Hassan"},{name:"Wasay"}];
// console.log(arr);
// let multiply = arr.map(a=>{
//     document.getElementById("table").innerHTML = a.name
// })
// console.log(multiply)

//Example#3 sort()
// let arr = [2, 3, 98, 100, 102];

// let a = arr.sort((a, b) => { return b - a; })
// console.log(a);
// let b = a.map((val) => {
//     return val * 2;
// })
// console.log(b);