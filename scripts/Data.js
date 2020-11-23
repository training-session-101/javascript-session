const foo = {name : 'Iftekhar', age: 28}
const bar = {name : 'ABC', age:22}
const pro = {name : 'XYZ', age:30}

console.log({foo, bar, pro});
console.table({foo, bar, pro});

// Keeping track of time
console.time('looper');
let i = 0;
while(i <10000000) i++;
console.timeEnd('looper');

// Using spread operator
const student = { id: 1, name: 'Iftekhar'};
const attr = {class : 'X', subjects : ['a', 'b', 'c']};

const mergedObj = {...student, id: 3}
console.log(mergedObj);

// Pushing elements to array
/*let arr = [];
arr.push('a');
arr.push('b');
arr.push('c');*/

let arr1 = ['a', 'b', 'c'];
let arr = ['x', 'y', 'z', ...arr1];
/*console.log(arr);
console.log(arr1);*/