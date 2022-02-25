//JavaScript is always synchronous. Jbhi hm API ka waqt hm isko (async/await) ka use krta hain.
// Async and Sync
// Async sequence manner mai task ko perform nhi krta. agr koi chiz execute hona mai time lgraha hoga to compiler usko chorkr aaga brjaiga.
//Sync aik aik krka task perform krta hai. In a sequence manner. Jitna bhi time lga lagai ga chora ga nhi.

// Example No. 1 about Asyncronous javascript
// setTimeout(function(){
//     console.log("Number 1");
// },1000)
// console.log("Number 2");
// console.log("Number 3");

var name1="Hassan";
setTimeout(function () {
    
    console.log(name1);
}, 2000)
setInterval(() => {
    console.log(name1);

}, 1000);

