var firstNumber=2   //global
function scope(){
    var secondNumber=3     //local
    console.log("secondNumber===>",secondNumber)
    var sum=firstNumber + secondNumber
    return sum
}
 let res=scope()
 console.log("firstnumber===>",firstNumber)
 console.log("result====>",res)
