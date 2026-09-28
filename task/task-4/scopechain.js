function createact(balance){
    var accountNo=2345
    console.log(balance)
    return(balance)=>{
        var amtcredited=balance+5000
        balance=amtcredited
        console.log(accountNo," - ",amtcredited)
        return(balance)=>{
            var amtdebited=balance-2500
            balance=amtdebited
            console.log(accountNo," - ",amtdebited)
            return balance
        }
    }

}
const account=createact(50000)
const credited=account(6000)
const debited=credited(3000)
console.log("Remaining amt===>",debited)
