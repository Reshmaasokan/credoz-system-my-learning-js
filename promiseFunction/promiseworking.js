function foodPreparation(){
    var promise=new Promise((resolve,reject)=>{
        console.log("Food is preparing")
    setTimeout(()=>{
      let success=true
      if(success==true){
        resolve("Food is prepared Sucessfully")
      }
      else{
        reject("Food is not Prepared ")
      }
    },300)
    })
    return promise

}
foodPreparation().then(
    (result)=>{
      console.log(result)
    }
)
.catch(
    (error)=>{
        console.log(error)
    }
)