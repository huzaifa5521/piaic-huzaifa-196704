interface car_ts{
    manufacturer:string,
    car_model:string
    key:string | number
}


function car_info(manufacturer: string, car_model: string, ...optional: string[]): any {
    let car_details: car_ts = {
        manufacturer: manufacturer,
        car_model: car_model
    };

    for (let i = 0; i < optional.length; i += 2) {
        let key: string | number = optional[i];
        let value : string | number = optional[i + 1];
        car_details[key] = value;
    }

    return car_details;
}

console.log(car_info('Pakistan', 'Civic', 'Color', 'White', 'no', 898989));
console.log(car_info('India', 'Maruti', 'Color', 'White', 'no', 898989));
