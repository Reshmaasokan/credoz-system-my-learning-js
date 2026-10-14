const product=[]
function display(){
    const res=document.querySelector(".result")
    res.innerHTML=`<b>Product List : </b>${product.join(',')}`

}

function addproduct(){
    const addbtn=document.querySelector("#addbtn")
    addbtn.addEventListener("submit", (e) => {
        e.preventDefault
        const add=document.querySelector("#cart").value
        var updatecart=add
        const para=document.querySelector(".message")
        product.push(updatecart)
        para.innerHTML=`<b>Product Added: </b> ${updatecart}`
        display()
        if(updatecart=""){
            return
        }
        add.value=" "
    })
   
} 

function removeproduct(){
    const remove=document.querySelector("#cart").value
    var removeproduct=remove
    const index=remove.indexOf(removeproduct)
    const para=document.querySelector(".message")
    product.push(updatecart)
    if(index !==-1){
        product.splice(index,1)
    }
    else{
        para.innerHTML=`<b>Product not Exist`
    }
    display()
    remove.value=" "
}
