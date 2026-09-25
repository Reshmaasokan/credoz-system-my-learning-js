function scope(){
    if(true){ 
        var number1=5         // used outside the block ,functional Scope
       // let number1=5       // used only inside the block,block scope
        console.log(number1)
    }
    console.log(number1)
}
scope()