// primitive : number , String , Boolean , BigInt , null , undefined , Symbol (unique)

x = 10
y = x 
console.log(y);
console.log(x);
y = 11
console.log(x);
console.log(y);

// reference: array , function , Object
const user = {
    name : "Atul",
    age : 40
}

const newUser = user

console.log(user)
console.log(newUser)

newUser.name ="Sharad"


console.log(user)
console.log(newUser)


//  primitive copy value to the variable but refenece pass the address of the memory

