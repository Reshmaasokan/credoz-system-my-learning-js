function shopping(type,amt){

            if(type=="premium"){
                console.log(type)
                if(amt>5000){
                    console.log("Discount 50% + free delivery")
                }
                else{
                    console.log("Discount 35% +free delivery")
                }    
            }
            else if(type=="normal") {
                console.log(type)
                if(amt<5000){
                    console.log("Discount 25% + free delivery")
                }
                else{
                    console.log(" Discount 14% + free delivery")
                }
    
            }
            else{

                console.log("No Discount and free delivery")
        }
        
        }
    

shopping("premium",3000)