function make_shirt(size:number){
    if(size>=2.5 && size<=4.5){
        console.log(`SIZE: ${size}  \nMESSAGE: APNA TIME AYGA`)
    }
    else if(size>=4.6 && size <= 6.5){
        console.log(`SIZE: ${size}  \nMESSAGE: WORLD IS WAY TO THE SUCCESS`)
    }
    else if (size>=6.6 && size <= 8.5){
        console.log(`SIZE: ${size}  \nMESSAGE: BEING A REBEL IS BETTER THAN A SALAVE`)
    }
    else{
        console.log('\nSIZE EXCEEDS : PUT THE SIZE IN BETWEEN 2.5 TO 8.5 ')
    }
}
make_shirt(3.18)
make_shirt(5.48)
make_shirt(7.48)
make_shirt(9.5)
