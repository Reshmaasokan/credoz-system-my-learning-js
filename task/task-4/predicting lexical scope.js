function before10yr(){
    var phone10=30000
    return ()=>{
        var phone5=phone10-10000
        return()=>{
            var phone=phone5-9000
            return phone
        }

    }

}
const before5yr=before10yr()
const before1yr=before5yr()
const currentyr=before1yr()
console.log(currentyr)
