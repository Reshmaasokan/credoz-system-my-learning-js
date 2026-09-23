function invertpyra(){
    for(let i=5;i>=1;i--){
        let row=""
        for(let j=1;j<=5-i;j++){
            row+=" "
        }
        for(let j=1;j<=2*i-1;j++){
            row+="*"
        }
        console.log(row)
    }
}
invertpyra()