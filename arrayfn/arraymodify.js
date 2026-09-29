function search(){
    let fruit=[1,2,3,7,4,5,6]
    let elementIndex=fruit.indexOf(6)
    let lastElement=fruit.lastIndexOf(7)
    let elementSearch=fruit.includes(3)

    return{
        "elementIndex":elementIndex,
        "lastElement":lastElement,
        "elementSearch":elementSearch
    }
}
var result=search()
console.log(result.elementIndex)
console.log(result.lastElement)
console.log(result.elementSearch)

