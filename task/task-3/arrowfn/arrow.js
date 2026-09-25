 var details={

 "name":"Reshma",

 "age":23,

 "gender":"female"
 }

//first function

//normal function
function first(details){
    return details.name
}
var firstFunction=first(details)
console.log(firstFunction)
//arrow function
const fir= details => details.name
var firFunction=fir(details)
console.log(firFunction)

//second function

//normal function
function second(details){
    return details.age
}
var secFunction=second(details)
console.log(secFunction)
//arrow function
const sec= details => details.age
var secondFunction=sec(details)
console.log(secondFunction)


//third function
//normal function
function thi(details){
    return details.gender
}
var thifunction=thi(details)
console.log(thifunction)

//arrow function
const third= details => {
    var gender=details.gender
    return gender
}
var thirdFunction=third(details)
console.log(thirdFunction)


