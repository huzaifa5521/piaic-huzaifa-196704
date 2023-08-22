let magican_names:string[]=['Magican1','Magican2','Magican3']

function show_magican_names(magican_names:any[]){
    for(let magican_name of magican_names){
        console.log(`${magican_name}`)
    }
}
function make_great(magican_names:any[]){
  for (let magican_name=0;magican_name<magican_names.length;magican_name++){
    magican_names[magican_name]=`The Great ${magican_names[magican_name]}`
  }
}
make_great(magican_names)
show_magican_names(magican_names)
export{}