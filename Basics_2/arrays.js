const array = [1,1,2,1,1,1,22,23,2332,2,2,2]
const names = ["Atul","Sharad","Barsha","Divya","Suraj"]

const usingKeyword = new Array(1,2,2,2,1,32,3,2,2,2,3,21,12,1,2,32,2,1)

// console.log(array);
// console.log(names);
// console.log(usingKeyword);


// [
//     1,  1,  2,    1, 1,
//     1, 22, 23, 2332, 2,
//     2,  2
//   ]
//   [ 'Atul', 'Sharad', 'Barsha', 'Divya', 'Suraj' ]
//   [
//     1,  2, 2, 2,  1, 32, 3,
//     2,  2, 2, 3, 21, 12, 1,
//     2, 32, 2, 1
//   ]

array.push(7)
array.push(99)
array.pop()
// console.log(array);

// [
//     1,  1,  2,    1, 1,
//     1, 22, 23, 2332, 2,
//     2,  2,  7,   99
//   ]


// [
//     1,  1,  2,    1, 1,
//     1, 22, 23, 2332, 2,
//     2,  2,  7
//   ]


array.unshift(99)
array.shift()
// console.log(array); // adds element at the start

// [
//     99, 1,  1,  2,    1,
//      1, 1, 22, 23, 2332,
//      2, 2,  2,  7
//   ]

// [
//     1,  1,  2,    1, 1,
//     1, 22, 23, 2332, 2,
//     2,  2,  7
//   ]



// console.log(array.join());
// console.log(typeof array.join());

// 1,1,2,1,1,1,22,23,2332,2,2,2,7
// string


// slice and splice 

let myArr = [1,2,3,3,4,5,5,6,67,7]
console.log("a",myArr);

let sli=myArr.slice(1,5)
console.log(sli);
console.log("b",myArr);

let spli=myArr.splice(1,5)
console.log(spli);

console.log("c",myArr);



// a [
//     1, 2, 3,  3, 4,
//     5, 5, 6, 67, 7
//   ]
//  sli = [ 2, 3, 3, 4 ]
//   b [
//     1, 2, 3,  3, 4,
//     5, 5, 6, 67, 7
//   ]
//   spli = [ 2, 3, 3, 4, 5 ]  // changes the orgional array and also returns the values till last index 
//   c [ 1, 5, 6, 67, 7 ]