function car_info(manufacturer,car_model,...optional){
    let car_details={
        manufacturer:manufacturer,
        car_model:car_model
    }
    for(let i=0;i<optional.length;i+=2){
          let key=optional[i]
          let value=optional[i+1]
          car_details[key]=value
    }

    return car_details
}

console.log(car_info('Pakistan','Civic','Color','White','no',898989))
console.log(car_info('India','Maruti','Color','White','no',898989))