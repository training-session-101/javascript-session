const posts = [{'id': '1', 'title': 'Sherlock Homes'},
    {'id': '2', 'title' : 'Shakespeare'}];

const getPosts = () => {
    setTimeout(() => {
        posts.forEach(post => {
            console.log(post.title);
        });
    }, 1000);
}

// Higher order function..
const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({id : 3, title: 'New Post'}, getPosts);

// getPosts();
