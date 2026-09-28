function calculator(price){
    return (discount)=>{
        if(price>5000){
            discount=discount/100*price
            price=price-discount
            console.log(price)
            return (tax)=>{
                tax=tax/100*price
                price=tax+price
                return price
            }
        }
        else{
            price=price-discount
            console.log(price)
            return (tax)=>{
                price=tax+price
                return price
            }
        }
    }

}

const amt=calculator(6000)(10)(10)

console.log(amt)