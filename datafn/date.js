//getter method

const MONTH=["JAN","FEB","MARCH","APRIL","MAY","JUNE","JULY","AUG","SEP","OCT","NOV","DEC"]
const DAY=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
function date(){
    let timestamp=new Date()
    let monthname=timestamp.getMonth()
    console.log("MONTH===>",timestamp.getMonth()+1)
    console.log("MONTH NAME===>",MONTH[monthname])
    console.log("YEAR===>",timestamp.getFullYear())
    let dayName=timestamp.getDay()
    console.log(DAY[dayName])
    console.log("Hours===>",timestamp.getHours())
    console.log("SECOND===>",timestamp.getSeconds())
    console.log("MINUTES===>",timestamp.getMinutes())
}
//date()

//setter method

function update(){
    let today=new Date()
    console.log(today)
    today.setFullYear(2035)
    today.setDate(25)
    today.setMonth(11)
    let monName=today.getMonth()
    console.log(MONTH[monName])
    console.log(today.getFullYear())
    console.log(today.getDate())
}
update()
