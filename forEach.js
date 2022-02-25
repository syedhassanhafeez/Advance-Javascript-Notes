//forEach() ==> Ye function array ko iterate or listing krna ka liye use krta hain
// DIFFERENCE B/W map & forEach
//Basically, if you want to obtain a modified form of the previous array, you use .map, if you don’t want that, you use .forEach.
const post = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' }

]
function getPost() {
    let output = '';
    setTimeout(() => {
        post.forEach(post => {
            output += `<li>${post.title}</li>`; //output +=  ==> means purani value ka undr new value ko add krna.
            document.body.innerHTML = output
        })
    }, 1000);
}
getPost()