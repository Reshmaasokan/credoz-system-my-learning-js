function datatransform(){
    const name=[
        {
        "firstName":"Anu ",
        "lastName":"Priya"
    },
    {
        "firstName":"Sri ",
        "lastName":"Priya"   
    }
    ]

    var arr=name.map(
        (value)=>{
            value.fullName=value.firstName + value.lastName
            return value
        }
    )
    console.log(arr)
}

//datatransform()

function sideEffect(){
    const product=[{
        "product":"Washing Machine",
        "price":30000,
        "discount":10
    },
    {
        "product":"Laptop",
        "price":45000,
        "discount":20
    }
]
product.forEach(
    (value)=>{
        if(value.product=="Washing Machine"){
            value.discount=value.discount/100*value.price
            value.price=value.price-value.discount
        }
        else{
            value.discount=value.discount/100*value.price
            value.price=value.price-value.discount
        }
    }
)

console.log(product)
}

//sideEffect()

function shallowCopy(){
const details=[
    {
       "name":"Priya",
       "address":"Madhurai",
       "gender":"Female"
    },
    {
       "name":"Arun",
       "address":"Tirunelveli",
       "gender":"Male"
    }
]
let copy=details.map(
    (value)=>{
        let newValue={...value}
        if(newValue.gender=="Male")
        newValue.status="Pass"
        
        return newValue
    }

)
console.log("details===>",details)
console.log("Copy===>",copy)
}

shallowCopy()
