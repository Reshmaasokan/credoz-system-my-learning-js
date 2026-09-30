let today=new Date()
console.log(today.getDate())
let nextDays=new Date("2026-10-10")
let difference=nextDays-today
console.log(difference)
let raandom=Math.random()*difference
let randomDtae=new Date(today.getTime()+raandom)
console.log(randomDtae)