
let arr = [1,2,3,45,6];

const mutateData = () => {
    arr[0] =4;
}

const main  = () => {
    mutateData();
    arr.forEach(x => {
        console.log(x);
    });
}

main();