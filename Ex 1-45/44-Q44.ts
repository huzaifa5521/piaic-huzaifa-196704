function sandwhich_ingridients(...ingridients:any){
    console.log(`List of ingridients in Sandwhich: "${ingridients.join('---')}"`)
}
sandwhich_ingridients('Extra Cheese','Extra Slice of Butter','Chilli and Garlic Mayo')
sandwhich_ingridients('Extra Bread','Extra Slice of Cheese','Ketchup and Chilli Mayo')
sandwhich_ingridients('Extra Meat','Extra Slices of Salad','Ketchup and Garlic Mayo')
export{}