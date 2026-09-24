function logictrap(error){
    if(error=="syntax"){
        console.log("crashes the app")
    }
    else if(error =="logic"){
        console.log("result are wrong")
    }
    else{
        console.log("Successful")
    }

}
logictrap("syntax")