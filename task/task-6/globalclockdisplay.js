let timestamp=new Date()
let offsettimeStamp=timestamp.getTimezoneOffset()
console.log("Browser",offsettimeStamp)
let targetoff=540
let diff=offsettimeStamp+targetoff
let targetTime=new Date(timestamp.getTime()+diff*60*1000)
console.log(targetTime.getHours())

