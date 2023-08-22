let user_names:string[]=['user1','user2','user3','user4','user5','admin']

for(let user_name of user_names){
    if(user_name==='admin'){
        console.log(`Dear ${user_name},would you liked to check status report.`)
    }
    else{
        console.log(`Dear ${user_name}, thank you for logging in`)
    }
}
export{}
