const posts = [{'id': '1', 'title': 'Sherlock Homes'},
    {'id': '2', 'title' : 'Shakespeare'}];

const createPost = (post) => {
    const error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!error) {
                posts.push(post);
                return resolve('Post Created');
            }
            else return reject('Something went wrong!');
        }, 3000);
    });
}

const getPosts = () => {
    const error = false;
    return new Promise((resolve, reject) => {
        if(!error) return resolve(posts);
        else return reject('Something went wrong!');
    });
}

const main = async () => {
    await createPost({id: 3, title: 'Iftekhar1'});
    await createPost1({id: 4, title: 'Iftekhar2'});
    getPosts().then(resolve => {
        resolve.forEach(post => console.log(post.title));
    });
    print();
}

const print = () => {
    console.log('Print');
}

main().then(() => {});
