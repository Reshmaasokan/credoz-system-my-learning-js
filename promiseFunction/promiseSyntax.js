var promise=new Promise((resolve,reject)=>{
    let age=28
    if(age>=18){
        resolve("Successfully")
    }
    else{
        reject("Unsuccessfully")
    }
})
promise.then(
    (result)=>{
        console.log("result====>",result)
    }
)

.catch(
    (error)=>{
        console.log("Error===>",error)
    }
)