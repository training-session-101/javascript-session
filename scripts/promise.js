const posts = [{'id': '1', 'title': 'Sherlock Homes'},
    {'id': '2', 'title' : 'Shakespeare'}];

const getPosts = () => {
    const error = false;
    return new Promise((resolve, reject) => {
       if(!error) return resolve(posts);
       else return reject('Something went wrong!');
    });
}

const createPost = (post) => {
    const error = false;
    return new Promise((resolve, reject) => {
        if(!error) {
            posts.push(post);
            return resolve('Post Created');
        }
        else return reject('Something went wrong!');
    });
}

Promise.all([createPost({id: 3, title: 'New Post 1'}), createPost1({id: 4, title: 'New Post 2'})])
    .then(values => {
        console.log(values[0]);
        console.log(values[1]);
        getPosts().then(resolve => {
            resolve.forEach(post => console.log(post.title))
        })
});


createPost({id: 3, title: 'New Post'}).then(_ => {
   getPosts().then(resolve => {
       resolve.forEach(post => {
           console.log(post.title);
       });
   });
});
