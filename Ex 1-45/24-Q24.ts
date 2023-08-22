let num1:number=10
let num2:number=12
let num3:number=10
console.log('\n==(equal too) and >=(is not equal too)')
console.log('num1!=num2 :',num1!=num2)
console.log('num1==num2 :',num1==num2)
console.log('\n<=(smaller than and equal too) and >=(greater than and equal too)')
console.log('num1>=num2 :',num1>=num2)
console.log('num1<=num2 :',num1<=num2)
console.log('\n<(smaller than) and >(greater than)')
console.log('num1>num2 :',num1>num2)
console.log('num1<num2 :',num1<num2)

console.log('\nIn and function ( && ) if both two statment is true it gives true otherwise false')
console.log('num1===num3 && num1<num2 : ',num1===num3 && num1<num2)
console.log('num1===num2 && num1<num2 : ',num1===num2 && num1<num2)
console.log('\nIn or function ( || ) if one statment is true it gives true otherwise false')
console.log('num1===num2 || num1<num2 :',num1===num2 || num1<num2)
console.log('num1===num2 || num1>num2 :',num1===num2 || num1>num2)

console.log('\ninclude() funcction is used for finding an element in any array')
let cars=['maruti','honda','shuzuki','farari']
console.log('The name honda is in car\'s array :',cars.includes('honda'))
console.log('The name hilux is not in car\'s array :',cars.includes('hilux'))