let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('postContainer')[0];
let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];
console.log(typeof postsDetailsButton_c);
userDetailsContainer.innerText = `${JSON.stringify(user)}`;
for(const elem in user) {
    if (typeof user[elem] === 'string') {
        let el = document.createElement('div')
        el.innerText = `${elem} - ${user[elem]}`
        userDetailsContainer.appendChild(el)
    } else {
        let el = document.createElement('div')
        el.innerText = `${elem}`
        userDetailsContainer.appendChild(el)
        for (const el in user[elem]) {
            if (typeof user[elem][el] ==='string') {
                let e = document.createElement('div')
                e.innerText = `${user[elem][el]}`
                userDetailsContainer.appendChild(e)
            }
            else{
                let e = document.createElement('div')
                e.innerText = `${el}`
                userDetailsContainer.appendChild(e)
                for(const volodya in user[elem][el]){
                    let l = document.createElement('div')
                    l.innerText = `${volodya} - ${user[elem][el][volodya]}`
                    userDetailsContainer.appendChild(l)
                }
            }
        }
    }
}

// postsButton.addEventListener('click', function () {
//     this.disabled = true;
//
//     fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
//         .then(value => value.json())
//         .then(value => {
//             console.log(value);
//             for (const postItem of value){
//                 let postContainer = document.createElement('div');
//                 postContainer.classList.add('post');
//                 postContainer.innerText = postItem.title;
//                 let postDetailsButton = document.createElement('button');
//                 postDetailsButton.innerText = 'post details'
//                 postDetailsButton.onclick = function () {
//                     location.href = `./post-details.html?data=${JSON.stringify(postItem)}`
//                 }
//
//                 postContainer.appendChild(postDetailsButton);
//                 postsContainer.append(postContainer);
//             }
//         })
//  })
postsDetailsButton .onclick = function () {
    this.disabled = true;

    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            console.log(value);
            for (const postItem of value){
                let postContainer = document.createElement('div');
                postContainer.classList.add('post');
                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerText = 'post details'
                postDetailsButton.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(postItem)}`
                }

                postContainer.appendChild(postDetailsButton);
                postsContainer.append(postContainer);
            }
        })
}
