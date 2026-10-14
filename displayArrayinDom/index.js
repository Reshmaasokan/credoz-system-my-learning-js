const fruit=["Apple","Orange","Grapes"]


function displayArray(){
    const para=document.querySelector("#result")
    para.innerHTML=`
          <p><b>Result:  </b>${fruit.join(",")}</p>`
}

function eventpreventer(e){
    e.preventDefault()
    const input=document.querySelector("#inputt")
    const newfruit=input.value
    const message = document.querySelector("#message");
    
    if(newfruit===""){
        return
    }
    fruit.push(newfruit)
    message.innerHTML = `<b>Added fruit:</b> ${newfruit}`;
    console.log(fruit)
    displayArray()
    input.value=""
}

function removeFruit(e) {
    e.preventDefault();

    const input = document.querySelector("#removeInput");
    const removefruit = input.value;
    const message = document.querySelector("#message");

    const index = fruit.indexOf(removefruit);

    if (index !== -1) {
        fruit.splice(index, 1);
        message.innerHTML = `<b>Removed fruit:</b> ${removefruit}`;
        displayArray();
    } else {
        message.innerHTML = `<b>Fruit not found:</b> ${removefruit}`;
    }

    input.value = "";
}

displayArray();
