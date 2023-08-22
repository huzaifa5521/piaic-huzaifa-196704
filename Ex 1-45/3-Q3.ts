
let quote_line:string='One Truth is better than hundred lies'

// upper case
console.log(quote_line.toUpperCase())
//lower case
console.log(quote_line.toLowerCase())
//title case
function toTitleCase(quote_line:string){
    let titlecase:string=quote_line.toLowerCase().split(' ').map((v:string,i:number)=>{ return v[0].toUpperCase()+v.slice(1)}).join(' ')
    
   return titlecase
}
console.log(toTitleCase(quote_line))

export{}