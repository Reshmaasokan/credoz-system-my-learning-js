const arrfn=(firstName,secondName,age) =>{
    return ()=>{
        var fullName=firstName+ " " +secondName
        if (fullName!=undefined){
                return ()=>
                {
                    if(age!=undefined){
                        if(age>18){
                            return "eligible"
                        }
                        else{
                            return "not eligible"
                        }
                        
                    }
                    else
                    {
                        return "Define age"
                    }
                }

        }
        else{
            return "Invalid username"
        }

        }

    }
var res=arrfn("Reshma","A",17)()()
console.log("message==>",res)