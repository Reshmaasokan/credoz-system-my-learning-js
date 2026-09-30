let MONTH=["JAN","FEB","MAR","APRIL","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"]
let BirthdayMonth=new Date("2026-09-20")
let birthMonthCheck=BirthdayMonth.getMonth()
let currentMonth=new Date()
let checkMonth=currentMonth.getMonth()
let takeNameMonth=BirthdayMonth.getMonth()
console.log(MONTH[takeNameMonth])
if(checkMonth==birthMonthCheck){
    console.log("It's your birthday Month")
}
else{
    console.log("It's not your birthday Month")
}