const student={
    name:"Reshma",
    age:"22",
    display:function(){
        console.log(this.name ," is ",this.age)
    }
}
const student2={
    name:"Anu",
    age:"24"
}

student2.display=student.display

student.display()
student2.display()