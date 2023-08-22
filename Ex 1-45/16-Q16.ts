let guest_list:string[]=['Huzaifa','Usama','Khalid']

//splice() method for adding name at mid of the list
let guest_remove:any=guest_list.splice(1,1,'Jhanzab','Arslan')

//unshift() method for adding name at beggining of the list
guest_list.unshift('Jasmine')

//push() method for adding name at end of the list
guest_list.push('Albert')

//splice() method for adding name at mid of the list
guest_list.splice(3,0,'Annie','Marlie')

console.log(`New List of Guest;\n${guest_list.join('--')}`)

for(let guest in guest_list){
    console.log(`Dear ${guest_list[guest]},\nYou are invited to night dinner party which is arranged by company's BODs. Please come and enjoy dinner.`)
    console.log('.........\n')
}
console.log('We found a bigger dinner table for the  night function')
export{}