// number , String , BigInt , undefined , null ,Boolean ,Object

let firstName = "Atul"
let age = 26
let isLoggedIn = false
var password;
let largeNumber = 98228282882828289999999999999999977777777777777777777777777 // should have given BigInt but not
var value = null //its an object 

console.table([typeof firstName,typeof age,typeof isLoggedIn,typeof password,typeof largeNumber,typeof value])