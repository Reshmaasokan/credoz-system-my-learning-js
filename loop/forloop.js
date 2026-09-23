function forloop(){
    for(let i=1;i<=5;i++){
        console.log("i====>",i)
    }
}
//forloop()


let text="Reshma"
function forinloop(){
    for(let i in text){
        console.log("i====>",text.charAt(i))
    }
}
//forinloop()

text1="Asokan"
function forofloop(){
    for(let i of text1){
        console.log("i====>",i)
    }
}
//forofloop()

function forofarray(){
    let Books=["Apple","Orange","Mango","Banana"]
    for(let i in Books){
    console.log(Books.at(i))
}
}
forofarray()



