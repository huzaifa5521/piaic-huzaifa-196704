let current_users:string[]=['Huzaifa','Aslam','Hania','Usaman','Usama']
let new_users:string[]=['Aslam','Jhanzab','Hania','Hashim','Huzaifa']


for(let new_user of new_users){
   let  lo_new_user=new_user.toLowerCase()
   let user_taken=false

   for(let current_user of current_users){
   current_user=current_user.toLowerCase()
   if(current_user==lo_new_user){
    user_taken=true
   }
if(user_taken){
    console.log('User name is already exist. Try another')
   }
   else{}
   console.log('User_name is available ')
   }
} 

//Another method

// for(let new_user of new_users){
//    let  lo_new_user=new_user.toLowerCase()
//    let user_taken=current_users.some(current_user=>current_user.toLowerCase()===lo_new_user)
//    if(user_taken){
//         console.log('User name is already exist. Try another')
//        }
//        else{     
//         console.log('User_name is available ')
//        }
// } 

export{}