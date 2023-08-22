let user_names:string[]=[]
if(user_names.length==0){
    console.log('Hey,We trying to find a new users for website')
}
else{for(let user_name of user_names){
    if(user_name==='admin'){
        console.log(`Dear ${user_name},would you liked to check status report.`)
    }
    else{
        console.log(`Dear ${user_name}, thank you for logging in`)
    }
}}