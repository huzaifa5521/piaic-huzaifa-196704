let guest_list:string[]=['Huzaifa','Usama','Khalid']

//splice() method for adding name at mid of the list
let guest_remove=guest_list.splice(1,1,'Jhanzab','Arslan')

//unshift() method for adding name at beggining of the list
guest_list.unshift('Jasmine')

//push() method for adding name at end of the list
guest_list.push('Albert')

//splice() method for adding name at mid of the list
guest_list.splice(3,0,'Annie','Marlie')

console.log(`List of guests : ${guest_list.join('--')}`)

console.log(`No of guests in list are ${guest_list.length}`)

