function paramid(){
    for(let i=1;i<7;i++){
            let row=""
        for(let j=1;j<=7-i;j++){ 
            row+=" "             
        }
        for(let j=1;j<=(2*i-1);j++){
            row += "*";
        }
        console.log(row)
    }
}
paramid()