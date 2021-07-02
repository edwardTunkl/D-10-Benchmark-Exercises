// JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
//         22) Create an object with properties such name, surname, email
//         23) Delete Email from the previously created object
//         24) Create an array with 10 strings in it
//         25) Print in the console every string in the previous array
//         26) Create an array with 100 random numbers in it
//         27) Wrote a function to get the MAX and the MIN from the previously created array
//         28) Create an array of arrays, in which every array has 10 random numbers
//         29) Create a function that gets 2 arrays and returns the longest one
//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values

// EX1
let x = "John"
let y = "Doe"
// console.log(x +" <> "+ y)

//EX2

let me = {
  name:"Edward",
  surname:"Tunkl",
  email:"eddy@tunkl.de"
}

// console.log(me)

//EX3
delete me.email
// console.log(me)

//EX4
let array = ["one", "two", "3","4","5","6","7","8","9","10"]
// console.log(array)

//EX5
// console.log(array)

//EX6

let randomNumbers = []
for (let i=0; i<100; i++) {
  let random = Math.floor(Math.random()*50)
  randomNumbers.push(random)
}
console.log(randomNumbers)
