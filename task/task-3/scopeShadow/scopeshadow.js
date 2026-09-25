var number=34
function scopeShadow(){
    var number=45
    console.log("local scope===>",number)
}
console.log("global scope===>",number)
var res=scopeShadow()