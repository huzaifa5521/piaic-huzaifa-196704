let digits:number[]=[1,2,3,4,5,6,7,8,9]
for(let digit of digits){
    if (digit===1) {
        console.log(`${digit}st`)
    } 
    else if (digit===2) {
        console.log(`${digit}nd`)
    } 
    else if (digit===3) {
        console.log(`${digit}rd`)
    } 
    else{
        console.log(`${digit}th`)
    }
            
}
export{}