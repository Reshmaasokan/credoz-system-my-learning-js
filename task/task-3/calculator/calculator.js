
const calculator=(price) => {
    var tax;
    var amt;
    if(price>50000){
        tax=30/100 * price
        amt=tax+price
        console.log("AC")
        return amt;
    }
    else if(price>25000){
        tax =15/100 * price
        amt=tax+price
        console.log("washing Machine")
        return amt;
    }
    else{
        tax=5/100 * price
        amt=tax+price
        console.log("TV")
        return amt;
    }
}
var res=calculator(45000)
console.log(res)