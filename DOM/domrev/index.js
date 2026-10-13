function classid(){
    const res=document.getElementById("title")
    res.textContent="Learning DOM"
    console.log("res====>",res)
}
classid()

function queryall(){
 const ress=document.querySelectorAll(".content")
 console.log("ress===>",ress)
}
queryall()

function tagname(){
 const result=document.getElementsByTagName("p")
 result[2].textContent="JavaScript Practice"
 console.log("result====>",result)
}
tagname()