const numbers = [23, 45, 67, 56, 234];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const mmaxInArray = Math.max(...numbers);
// console.log(max, mmaxInArray);

// numbers.push(55);
console.log(numbers);

const numbers2 = [22, ...numbers, 556];
numbers.push(55);
console.log(numbers);
console.log(numbers2);
