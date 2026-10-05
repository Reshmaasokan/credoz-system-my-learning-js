function shopping(callback1,callback2){
    setTimeout(()=>{
        let product=[{
            id:101,
            name:"Washing Machine",
            price:30000,
        },
        {
            id:102,
            name:"Dishwasher",
            price:35000,

        },
        {
            id:103,
            name:"Tv",
            price:25000,

        },
        {
            id:104,
            name:"Fridge",
            price:30000,

        }]
        console.log("Product Details",product)
        callback1(product,callback2)
    },1000)
}
function discount(product,callback2){
       setTimeout(()=>{
        const discountarr=product.map((value)=>{
            value.price=value.price-(value.price*10/100)
            return value
        })
        console.log("Discount Applied",discountarr)
        callback2("SANTA",discountarr)
       },500)
}

function coupon(couponCode,discountarr){
    let today=new Date("2026-10-05")
    var coupenArray=discountarr.map((value)=>{
            if(couponCode=="SANTA"&& value.price>=28000 && today.getDate()=="5"){
                value.price=value.price-(value.price*30/100)
            }
            else {
                console.log("No Coupon for the product :",value.name)
            }
        return value
    })
    console.log(" After Coupen Applied",coupenArray)

}
shopping(discount,coupon)