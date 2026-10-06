function getProduct(){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let productAvailabel=true
    if(productAvailabel){
       resolve({
        name:"Laptop",
        id:101,
        price:50000
    })
    }
    else{
        reject("Product is not availabele")
    }
    
    },2000)
   })
}

function checkPayment(){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        var payment=true
        if(payment){
            resolve("Successful payment")
        }
        else{
            reject("Unsuccessful payment")
        }

        },3000)

    })
}

async function displayProduct() {
    try{
    console.log("Fetching details")
    const result= await getProduct()
    console.log(result)
    console.log("Displayed Product Details")
    console.log("Fetching Payment Details")
    
        const paymentResult=await checkPayment()
        console.log(paymentResult)
    }
    catch{
        console.log("Try Again")
    }
}
const startday=new Date("2026-10-01")
const enddate=new Date()
enddate.setDate(startday.getDate()+10)

const today=new Date()


if(today>=startday && today<=enddate){
    console.log("Offer is available for the product")
    console.log("Product order is place")
    displayProduct()
    console.log("Displaying Products")
}

else{
    console.log("NO OFFERS")
}
