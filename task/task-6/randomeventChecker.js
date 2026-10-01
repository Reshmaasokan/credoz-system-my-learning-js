function eventfn(){
    let today=new Date();
    let endDay=new Date()
    endDay.setDate(today.getDate()+10)
    let difference=endDay.getTime()-today.getTime()
    let randomTime=Math.random()*difference
    let randomDate=new Date(today.getTime()+randomTime)
    console.log("Today",today.getDate())
    console.log("End Date",endDay.getDate())
    console.log("Random Date",randomDate.getDate())

}
eventfn()