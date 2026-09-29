//pushArray 

function pushArray(){
    let fruit=["apple","orange","pineapple","banana","mango"]
    fruit.push("strawberry")
    return fruit
}
var result=pushArray()
console.log("pusharray==>",result)

//popArray

function popArray(){
    let fruit1=["apple","orange","pineapple","banana","mango"]
    let rem=fruit1.pop()
    return fruit1
}
var result=popArray()
console.log("popArray==>",result)

//unhift

function unshif(){
    let fruit1=["apple","orange","pineapple","banana","mango"]
    fruit1.unshift("strawberry")
    return fruit1
}
var result=unshif()
console.log("unshift===>",result)

//shift

function shif(){
    let fruit1=["apple","orange","pineapple","banana","mango"]
    fruit1.shift()
    return fruit1 
}
var result=shif()
console.log("shift===>",result)

//splice

function splic(){
    let fruit1=["apple","orange","pineapple","banana","mango"]
    fruit1.splice(1,1,"kiwi","grapes")
    return fruit1
}
var result=splic()
console.log("Splice====>",result)