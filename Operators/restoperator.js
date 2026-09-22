let skills=["HTML","CSS","JS"]

function time(...newskills){
let updatedkills=[...skills,...newskills]
console.log(updatedkills)
}
time("Java","SpringBoot","SQl")