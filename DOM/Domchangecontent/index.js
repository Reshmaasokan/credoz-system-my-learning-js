const home=document.getElementById("home")
const about=document.getElementById("about")
home.addEventListener("click",()=>{
    home.classList.add("active")
    about.classList.remove("active")
})

about.addEventListener("click",()=>{
    home.classList.remove("active")
    about.classList.add("active")
})