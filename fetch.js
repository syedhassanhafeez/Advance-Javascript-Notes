//fetch keyword is used jb hama database se data ko get or save karana hota hai.
//domain name in this example is "https://jsonplaceholder.typicode.com"
// (.then) & (.catch) is used in promise for result. Like if or else.
//fetch Bydefault Promise return krta hai.

//Example #1 
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())  // fetch krna ka baad response ko json mai convert krna lazmi hai.
//   .then(data => console.log(data) )  //Us ka baad response ko console mai print kraya
//   .catch(function(err){ console.log("error",err) } )


//Example #2 (Bagair (.then or .catch) ka kaisa fetch use karai)
// async => jb tk ye function chla ga nhi javascript aaga nhi bara gi.
//Why await is used in this function because await keyword jb tk is API se data ut kr aana jae jb tk agli line pr jana nhi.

// async function getData(){
//     let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const user = data.json()  // fetch krna ka baad response ko json mai convert krna lazmi hai.
//     console.log(data);
//     return user
// } 
// var a = getData()
// a.then((data)=>console.log(data));
// console.log("Hurrah");


//Example # 3 (Actual Post Example # 1 se get krali isme aik step add kra hai wo mapping krka sirf title ki property ko render kralia actual post mai se.)

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())  // fetch krna ka baad response ko json mai convert krna lazmi hai.
    .then(data => data.map(post => post.title)) //Puri post mai sirf title ki property ko fetch krka laiga
    .then(data => console.log(data))     //Us ka baad response ko console mai print kraya
    .catch(function (err) { console.log("error", err) })

