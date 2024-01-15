const nameOfGame =new String("Dota\u0001\j87722\w222\u2222\wjuwyyw\    1 1 1 ")
const age = new String("46")
const res = `my name is ${nameOfGame} and age is ${age}`
console.log(nameOfGame + age); // dont use this 
console.log(res)
console.log(nameOfGame.normalize("NFC"));
console.log(nameOfGame.normalize("NFD"));
console.log(nameOfGame.normalize("NFKC"));
console.log(nameOfGame.normalize("NFKD"));

console.log(nameOfGame.split(' '))

