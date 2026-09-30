function pro(){
    let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
var updateArr=products.map(
    (value)=>{
       value.discount=10/100*value.price
       value.finalPrice=value.price-value.discount

    return value
    }
    
)
console.log(updateArr)

}
//pro()

function student(){
    let students = [
    {
        name: "Reshma",
        marks: {
            maths: 80,
            science: 75
        }
    },
    {
        name: "Anu",
        marks: {
            maths: 60,
            science: 90
        }
    },
    {
        name: "Ravi",
        marks: {
            maths: 70,
            science: 65
        }
    }
];
var updArray=students.map(
    (value)=>{
        value.total=value.marks.maths+value.marks.science
        return value
    }
    
)
console.log(updArray)
}
student()