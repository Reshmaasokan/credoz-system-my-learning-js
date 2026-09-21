function time(){
    let name="Reshma"
    if(true){
        let age=22
        age=23
        console.log("Inside the block",name)
        console.log("inside the block",name,"and age",age)
    }
    console.log("outside the block",name)
    console.log("outside the block",name,"and age",age)

}
time()