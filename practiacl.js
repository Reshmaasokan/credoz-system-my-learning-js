function second(){
let number=555566685525582
let arr=String(number).split("")
console.log(arr)
let set=[...new Set(arr)]
console.log(set)
set.sort((a,b)=>b-a)
let num=set.join("")
console.log(num[1])


}
second()


function removezero(){
   var number=5555666000855000025500082
   var arr=String(number).split("")

   var res=arr.filter((value)=>value!=0? value:false)
   var num=res.join("")
   console.log(num)
}
//removezero()