let url = new URL(location.href);
let post = JSON.parse(url.searchParams.get('data'));
console.log(post);


let postContainer = document.getElementsByClassName('post')[0]
console.log(postContainer);
postContainer.innerText = JSON.stringify(post);

// let commentsContainer = document.getElementsByClassName('comments')[0];
// fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
//     .then(value => value.json())
//     .then(value => {
//             for (const commentItem of value){
//             commentContainer = document.createElement('li');
//             commentContainer.innerText = commentItem.body;
//             commentsContainer.appendChild(commentContainer)
//             }
//         })