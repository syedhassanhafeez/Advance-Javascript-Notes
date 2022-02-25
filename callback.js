// CALLBACK
//Callback, Promise, Async/Await ==> jb createPost (ye hogae) hogae tb getPost (ye ho) ho.
    // const posts = [
    //     { title: "Post One", body: "This is post one" },
    //     { title: "Post Two", body: "This is post two" }

    // ]
    // function getPost() {
    //     let output = '';
    //     setTimeout(() => {
    //         posts.forEach((post) => {
    //             output += `<li>${post.title}</li>`;
    //             document.body.innerHTML = output
    //         })

    //     }, 1000);
    // }


    // function createPost(post, callback) {

    //     setTimeout(() => {
    //         posts.push(post);
    //         callback();
    //     }, 2000);

    // }

    //Ye wala callback ka function jb chala ga jb createPost hojae gi then getPost ka function chal ga.
    // createPost({title:"Post Three", body:"This is post three"}, getPost)