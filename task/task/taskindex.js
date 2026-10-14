
    /* Method 1*/
    const heading=document.querySelector(".heading")
    const btnn=document.querySelector(".btn")
    btnn.addEventListener("click",()=>{
        heading.textContent="Welcome Joinee"
    })

    /*Method 2*/
    /*const heading=document.querySelector(".heading")
    function changetext(){
        heading.textContent="Welcome Joinee"
    }*/

    const list=document.querySelectorAll(".hightlights")
    list.forEach(value=>{
        value.style.backgroundColor="yellow" 
    })
    

    const node=document.querySelectorAll(".container")
    node.forEach(value=>{
            const childrenNode=value.childNodes
            const typeNode=value.nodeType
            console.log(typeNode)
            console.log(childrenNode)
    })


    const parent=document.querySelector(".hightlights")
    const listInparent=parent.getElementsByTagName("li")
    console.log(listInparent.length)

  for(var i=0;i<listInparent.length;i++) {
        if(listInparent[i].innerText=="CSS"){
            listInparent[i].remove()
        }
    };

    function count(){
        console.log("node length===>",listInparent.length)
    }
    count()