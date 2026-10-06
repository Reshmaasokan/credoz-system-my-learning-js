//Topic: Tracing Synchronous Execution Flow .
// Create a script with multiple nested function calls and variable updates. Manually trace the flow using a 'state table' to track variable values. 
function getAmt(balance,amt){
  
    balance=balance+amt    ///55000
    let deposit=500 
 return withdrawAmt(balance,deposit)
}
function withdrawAmt(balance,deposit){
     if(balance>deposit){
          balance=balance-deposit  //54500
     }
     else{
        console.log("Insufficient Balance")
     }
    

return DisplayBalance(balance)
}
function DisplayBalance(balance){
    console.log("Balance amount after credided and debited",balance)
}

//getAmt(50000,5000)

//The Blocking Experiment
// Simulate a UI 'freeze' by running a massive loop that prevents an asynchronous callback (setTimeout) from firing on time.

function blockExperiment(){
    console.log("Program Starts")
    setTimeout(()=>{
        console.log("callback executes after the call stack is free")
    })
    for(let i=0;i<=10000000000;i++){

    }
    console.log("Program finished")

}
//blockExperiment()


//AdvancedEventLoop

function loop(){
    console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");

}
loop()