let markMass1 = 78; 
let markHeight1 = 1.69; 
let johnMass1 = 92; 
let johnHeight1 = 1.95; 

let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; 
let johnHeight2 = 1.76; 


let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);


let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);


let markHigherBMI1 = markBMI1 > johnBMI1;


let markHigherBMI2 = markBMI2 > johnBMI2;

console.log(`Data 1: Mark's BMI is ${markBMI1.toFixed(2)}, John's BMI is ${johnBMI1.toFixed(2)}. Mark has a higher BMI: ${markHigherBMI1}`);
console.log(`Data 2: Mark's BMI is ${markBMI2.toFixed(2)}, John's BMI is ${johnBMI2.toFixed(2)}. Mark has a higher BMI: ${markHigherBMI2}`);
