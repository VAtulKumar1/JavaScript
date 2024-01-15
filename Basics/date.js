let myDate = new Date()
console.log(myDate.getFullYear());
console.log(myDate);
console.log(myDate.toDateString());

// 2024
// 2024-01-15T19:36:27.955Z
// Tue Jan 16 2024

console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// 16/1/2024
// 16/1/2024, 1:07:59 am


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate.getTime()/1000);
console.log(Math.round(((myDate.getTime()/1000)/60)/60));


// 1705348048596
// 1705348048.571
// 473708
