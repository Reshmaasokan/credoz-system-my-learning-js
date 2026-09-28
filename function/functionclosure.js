function createBankAccount(){
    let balance=1000
    function deposit(depo)
    {
    balance=balance+depo
    console.log(balance)
    }

    function withdraw(Amt){
        balance=balance-Amt
        console.log(balance)

    }    
    return {
        deposit:deposit,
        withdraw:withdraw
    }
}
const account=createBankAccount()
account.deposit(500)
account.withdraw(200)
account.deposit(1000)