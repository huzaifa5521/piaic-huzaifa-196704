let magician_names:string[]=['Magican1','Magican2','Magican3']

function show_magician_names(magician_names:any[]){
    for(let magician_name of magician_names){
        console.log(`${magician_name}`)
    }
}
function make_great(magician_names:any[]){
   let  magician_names2:string[]=[]
   for(let magician_name=0;magician_name< magician_names.length;magician_name++){
      magician_names[magician_name]=`The Great ${magician_names[magician_name]}`
      magician_names2.push(magician_names[magician_name])
   }
   return magician_names2
}
let copy_magician_names:string[]=make_great(magician_names.slice())

console.log('........Orignal Magicians')
show_magician_names(magician_names)
console.log('........The Great magician')
show_magician_names(copy_magician_names)
export{}