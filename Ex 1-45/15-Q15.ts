
let guest_list:string[]=['Huzaifa','Usama','Khalid']
//splice() method for adding name at mid of the list
let guest_remove:any=guest_list.splice(1,1,'Jhanzab','Arslan')
console.log(`New List of Guest;\n${guest_list.join('--')}`)
for(let guest in guest_list){
    console.log(`Dear ${guest_list[guest]},\nYou are invited to night dinner party which is arranged by company's BODs. Please come and enjoy dinner.`)
    console.log('.........\n')
}
console.log(`List of guests which are not comming;\n${guest_remove.join('--')}`)
export{}