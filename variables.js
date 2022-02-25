// Difference between Var , Let , Const 

//var variable==> same key updated and declared also.
// var name="hassan";
// var name="haris";
// console.log(name);

/****************************************************************** */
//let variable==> same key updated and not declared .
// let name="Hassan";
// name = "Haris";
// console.log(name);

/****************************************************************** */
//const variable==> same key neither updated nor declared also.
//Example # 1
// const name = "Hassan";
// name = "Haris"
// console.log(name);

//Example # 2 Ye update hogae ga kyu ka ye name ko update nhi kra name ka undr uski aik property(fullname) ko target krka khali usko change krraha hai.
const name = {
    fullname: "Hassan"
};
console.log(name)
name.fullname = "Haris";
console.log(name);
