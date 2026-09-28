function login(){
    var balance=50000
    function getbalance(){
        return balance
    }
    function setBalance(){
        balance=balance-20000
        return balance
    }

    return{
        "ReadBalance":getbalance,
        "SetBalance":setBalance
    }
}

const log=login()
console.log(log.ReadBalance())
console.log(log.SetBalance())
