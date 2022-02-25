// async function deno(){
//     console.log('Inside deno function');
//     const response1 = await fetch('https://api.github.com/users')
//     console.log('Before Response');

//     const user=response1.json()
//     console.log('User Resolved');
//     return user;
// }
// var a = deno();
// console.log('Before Running');
// console.log(a);

// console.log('After Running');
// a.then(data=>console.log(data));
// console.log('Last line of the code ');

async function aalu(){
    console.log("Before Running");
    const response1 = await fetch('https://api.github.com/users');
    
    const user = response1.json();
    console.log(user);
    return user
}
var a = aalu()
console.log(a);
a.then((data)=>console.log(data));
console.log('Last line of the code ');