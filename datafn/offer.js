var product="Laptop"
var price=50000
var discount=10
function offer(){
    let offerStart=new Date("2026-09-01")
    let offerEnd=new Date("2026-09-30")
    let today=new Date()
    console.log(today)
    if(today>=offerStart && today<=offerEnd){
        var discountAmt=discount/100*price
        var final=price-discountAmt
        console.log("Product Name==>",product)
        console.log("Actual Price===>",price)
        console.log("Discount===>",discount,"%")
        console.log("Final Price===>",final)
    }
    else{
        console.log("Offer is not available")
        console.log("Product Name==>",product)
        console.log("Actual Price===>",price)
    }
}
offer()