function statement(){
    var grade;
    let mark=75
    if(mark>=90){
        grade="O"
    }
    else if(mark>=80){
        grade="A"
    }
    else if(mark>=70){
        grade="B"
    }
    else if(mark>=35){
        grade="C"
    }
    else{
        grade="F"
    }

    switch (grade){
        case "O":
            console.log("Excellent")
            break;
        case "A":
            console.log("Very Good")
            break;
        case "B":
            console.log("Good")
            break;
        case "C":
            console.log("Average")
            break;
        default:
            console.log("fail")
    }
}

//statement()

function calculator(){
    let a=20
    let b=5
    var operator="1";
    switch (operator){
        case "1":
            console.log(a+b)
            break;
        case "2":
            console.log(a-b)
            break;
        case "3":
            console.log(a*b)
            break;
        case "4":
            console.log(a/b)
            break;
        default:
            console.log("Invalid Operator")
    }
}
calculator()