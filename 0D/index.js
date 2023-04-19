/* Higher order functions

const addTwoNumbers = (a, b) =>{
    console.log(`Sum of two numbers:${a + b}`);
}

addTwoNumbers(7, 8);

let addMethod = addTwoNumbers;

addTwoNumbers(5, 6);
addMethod(5,6);

// Printing function name

console.log(addTwoNumbers);

console.log(addMethod);

console.log(addTwoNumbers.name);
console.log(addMethod.name);
*/

/* Call back functions

const sum =(param) => {
    param(5, 6);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two numbers: ${ x + y}`);
}

sum(add); //mentos zindagi
add(5,6); // aam zindagi
*/

/*mentos zindagi with a twist
const sum =(param, a, b) => {
    param(a, b);
    console.log(`Finished adding two numbers`);
}

const add = (x, y) => {
    console.log(`Sum of two numbers: ${ x + y}`);
}

sum(add, 10, 15); 
*/

// Iterators
// Iterators are methods used on arrays to work on the same.
// some of the coomon iterators are forEach(), map(), filter()
/*
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];

let itrFruit = function(fruit){
    console.log(`10 gms of ${fruit}`);
}

fruitSalad.forEach(itrFruit);
*/
/*Mentos zindagi
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach(function(fruit){
    console.log(`10 gms of ${fruit}`);
});
*/

/* mentos zindagi with arrow function
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];


fruitSalad.forEach(fruit=>{
    console.log(`10 gms of ${fruit}`);
});
*/

// Map Function
// froEach() pops out an element of an array and it operates on it.
//map() works in the same way but it returns a new array with added logic
/*
const numbers =[1,2,3,5,7];

const logic = function(num){
    return num * num
}

const squares = numbers.map(logic);
console.log(squares);
*/
/* mentos zindagi
const numbers =[1,2,3,5,7];

const squares = numbers.map (function (num){
    return num * num
});
console.log(squares);
*/
/*
const numbers =[1,2,3,5,7];

const squares = numbers.map(num => {
    return num * num
});
*/
/*
const square = numbers.map (num => num * num);
console.log(squares);
/*
const fruitSalad = ['apple', 'pineapple', 'banana', 'orange', 'kiwi', 'custard'];
let salad = fruitSalad.map(fruit => {
    return `10 grams of ${fruit}`
});

console.log(salad);

*/

/* 
Filter method

1)filter method returns a new array after filtering the elements from existing array.
2).filter() returns an array of elements an array of elements after filtering out certain elements from the original array.
3) the callback function (logic method) for the .filter() method should return true or false
*/
/*
const mixedArray =['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const logic = function(item){
    if (typeof item == 'number'){
        return true;
    }
    else {
        return false;
    }
}

const num = mixedArray.filter(logic);
console.log(num);
*/

// Metos Zindagi
/*
const mixedArray = ['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const num = mixedArray.filter(item => {
    if (typeof item == 'number') {
        return true;
    }
    else {
        return false;
    }
});
console.log(num);
*/
//Mentos Zindagi with a twist
/*
const mixedArray = ['apple', 'banana', 5.4, 8, 'kiwi', '3.147', 9.5, '25'];

const num = mixedArray.filter(item => {
    return (typeof item == 'number') ? true : false;
});
console.log(num);
*/
/*Mentos with Namak
const mixedArray = ['apple', 'banana', 5.4, 8, 'Kiwi', '3.147', 9.5, '25'];
const num = mixedArray.filter(item => (typeof item == 'number') ? true : false);
console.log(num);
*/

// Find Index method
// findIndex() method retrieves the index of first element of the array which matches with the true condition in the logic
/*
let fruits = ['apple', 'banana', 'kiwi', 'mango', 'grapes'];

 let fruitsName = fruits.findIndex((fru) => {
return fru === "kiwi"
})

console.log(fruitsName);

let startsWith = fruits.findIndex((fr)=>{
    return fr[0] === 'm';
})
console.log(startsWith);
*/




