// Promise ==> Three functions
// resolve, reject,pending
//Promise ka agr hama result chaiya hota to hm (.then) or (.catch) use krta hain. Like if or else.
//Promise agr resolve hojata hai to uska answer (.then) ka under milta hai.
//Promise agr reject hojata hai to uska answer (.catch) ka under milta hai.

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
// })
// console.log(promise);
// promise.then(function(data){
//     console.log("Resolve==> ",data);
// })
// .catch(function(error) {
//     console.log("Reject==> ",error);
// })

// //Another Example
// //PROMISE ==> Replacement of CALLBACK
// const posts = [
//     { title: 'Post One', body:"This is post one" },
//     { title: 'Post two', body:"This is post two" }

// ]

// function getPost() {
//     let output = '';
//     setTimeout(() => {
//         posts.forEach((post) => {
//             output += `<li>${post.title}</li>`
//             document.body.innerHTML = output;
//         })
//     }, 1000);
// }
// function createPost(post) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             posts.push(post)
//             const error = false;

//             if (!error) {
//                 resolve(10);
//             } else {
//                 reject('Error: Something went wrong')
//             }

//         }, 2000);
//     })
// }
// createPost({ title: 'Post Three', body:"This is post three" })
//     .then((val)=>{  //Ye wala .then ka function jb chala ga jb createPost hojae gi then getPost ka function chala ga.
//         getPost();
//         return val;
//     })
//     .then(val=> console.log(val*2))

//     .then(console.log('A.O.A'))
//     .catch(err => console.log(err));


//Promise.all ==> Ye dekh legia ga aik br.
//Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });