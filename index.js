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
let firstArray = ["one", "two", "3","4","5","6","7","8","9","10"]
// console.log(firstArray)

//EX5
console.log(firstArray)

//EX6

let randomNumbers = []
for (let i=0; i<100; i++) {
  let random = Math.floor(Math.random()*50)
  randomNumbers.push(random)
}
// console.log(randomNumbers)

//EX7

   maxValue = [0]

   for(i=0; i<randomNumbers.length; i++){

    if (randomNumbers[i] > maxValue )
       maxValue = randomNumbers[i]
  }
   minValue = [50]

   for(i=0; i<randomNumbers.length; i++){

    if (randomNumbers[i] < minValue )
       minValue = randomNumbers[i]
  }

// console.log(maxValue, minValue)

//EX8

let bigArray = []
let array1 = []
let array2 = []
let array3 = []

for (let i=0; i<10; i++) {
  let random = Math.floor(Math.random()*500)
  array1.push(random)
}
for (let i=0; i<10; i++) {
  let random = Math.floor(Math.random()*500)
  array2.push(random)
}
for (let i=0; i<10; i++) {
  let random = Math.floor(Math.random()*500)
  array3.push(random)
}
// console.log(array1)
// console.log(array2)
// console.log(array3)

bigArray =[array1, array2, array3]

console.log(bigArray)