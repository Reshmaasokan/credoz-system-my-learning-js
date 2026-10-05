function placeOrder(callback,callback1){
    setTimeout(()=>{
     console.log("Food is ready")
     callback(callback1)
    },2000)
}

function orderpreparing(callback1){
    setTimeout(()=>{
        console.log("Food is ready to delivery")
        callback1()
    },500)
}

function arrangeAgent(){
    console.log("Deliver agent is ready for delivery")
}

placeOrder(orderpreparing,arrangeAgent)