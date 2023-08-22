let guest_list:string[]=['Huzaifa','Usama','Khalid']

//splice() method for adding name at mid of the list
let guest_remove:string[]=guest_list.splice(1,1,'Jhanzab','Arslan')

//unshift() method for adding name at beggining of the list
guest_list.unshift('Jasmine')

//push() method for adding name at end of the list
guest_list.push('Albert')

//splice() method for adding name at mid of the list
guest_list.splice(3,0,'Annie','Marlie')
console.log('Mesage: Only two people are allowed for dinner due to the deficiency of tables, Sory!\n The invited  person can receive their email after some time\n ') 
console.log('The persons who are not invited')
while(guest_list.length>2){
    let pop_list=guest_list.pop()
    console.log(`Dear ${pop_list}, due to some emerengy you are not invited to night dinner\n...........................`)

}


console.log(`\n\nNew List of Guest;\n${guest_list.join('--')}\n`)
for(let i of guest_list){
    console.log(`Dear ${i}, You are still inviting to dinner. Please come and join this night dinner\n.........................`)
}

export{}