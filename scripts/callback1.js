const posts= [{id: 1, name: 'Post 1'},
    {id: 2, name: 'Post 2'}];

const createPost = (post) => {
    console.log('adding post'); // moved to call Stack
    let i =0;
    setTimeout(() => {
        while(i < 1000){
            i++;
            console.log(i);
        }
        console.log('data pushed');
        posts.push(post);
    }, 10);
    // moved to call Stack
    console.log('Post added');
}

createPost({id: 3, name: 'new post'});
