const button=document.querySelector("#btn")
const para=document.querySelector("#box")
button.addEventListener("click",()=>{
    para.textContent="Hello JavaScript!"
    para.style.backgroundColor="green"
    para.style.color="white"
})