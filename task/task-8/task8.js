//Create a script that processes an array of e-commerce products (objects with id, name, and price). Practice extracting, filtering, and identifying specific items.

function array(){
const product=[{
    id:1,
    name:"Tv",
    price:30000
    },
    {
    id:2,
    name:"Washing Machine",
    price:28000
    },
    {
    id:3,
    name:"Fridge",
    price:31000
    }
]
var greater=product.filter(
    (value)=>{
        if(value.price>28000){
           return value
        }
    }
)
var cart=greater.map(value=>value.name)
console.log("product greater than 28000 are",greater)
console.log("product name greater than 28000 are",cart)
}
//array()

//Write a script that executes synchronous code, a setTimeout, and a Promise. Predict the output order before running the code.
function eventloop(){
     console.log("Program starts")

     setTimeout(()=>{
        console.log("Wait for the connection")
    },500)

     Promise.resolve().then(()=>{
        console.log("take immediate action")
     })

     console.log("End")
}
//eventloop()

//You receive a raw list of user objects with nested data. Clean the data to extract active users, transform their full names, and sort them alphabetically.

function dtautilty(){
   const users=[
    {firstname:"Anu",lastname:"Kumar",age:23,occupacation:{working:"doctor",status:"active"},location:"chennai"},
    {firstname:"Priya",lastname:"Ravi",age:22,occupacation:{working:"Enginner",status:"active"},location:"Madhurai"},
    {firstname:"Amu",lastname:"Karthi",age:24,occupacation:{working:"doctor",status:"Inactive"},location:"Trichy"},
    {firstname:"Sree",lastname:"Durga",age:23,occupacation:{working:"Engineer",status:"Inactive"},location:"chennai"},
    {firstname:"Preethi",lastname:"Ravi",age:22,occupacation:{working:"doctor",status:"active"},location:"Madhurai"}]


var filteractive=users.filter((value)=>{
    if(value.occupacation.status=="active"){
        return value
    }
})

var full=filteractive.map((value)=>{
    value.fullname=value.firstname+value.lastname
    return value.fullname
} 
)
full.sort()



console.log("Active profession users",full)

}
dtautilty()



