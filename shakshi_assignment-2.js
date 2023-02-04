// //Object.assign
// var class1={a:10,b:20,c:30}
// var class2={d:12,e:13}
// var class3={f:15,g:10}

// var new_object=Object.assign(class1,class2,class3);
// console.log(new_object)

// //Object.freeze()
// var class4={a:50}
// class4=Object.freeze(class1)

// console.log(class4.a)

// //Object.getPrototypeOf
// console.log(Object.getPrototypeOf(class4))

// //Object.keys & Object.values
// // console.log(Object.keys(class1))
// // console.log(Object.values(class1))


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();   //remove last element of array
// console.log(fruits)
// fruits.push('Kiwi') //add element in the last position
// console.log(fruits)

// fruits.shift() //remove first element of array
// console.log(fruits)
// fruits.unshift('Pineapple','Strawberry')
// console.log(fruits) //add element in the first position


// let text = "Hello world Hello ";
// let result = text.indexOf("Hello"); //find occurance of word 
// console.log(result)
// let new_result = text.lastIndexOf("Hello"); //find occurance of word 
// console.log(new_result)


//https://underscorejs.org/              -refer it
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2,2) //remove from position
// //fruits.splice(2,2,'Kiwi','lemon') //replace at position 
// fruits.splice(2,0,'Kiwi','lemon') //add element at position
// console.log(fruits)
/*
//check every element if all are true then only true 
function checkPrime(number) {
    return number % 2 == 0;
}
function func() {
    var arr = [2];
    var value = arr.every(checkPrime);
  console.log(value);
}
func();
*/
/*
// any one value is true then return true 
function checkAdult(number) {
  return number >=18;
}
function func() {
  var arr = [20,3,4,5,6];
  var value = arr.some(checkAdult);
console.log(value);
}
func();

*/

/*
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const a=[44,67,21,45,1,90]
a.sort() //sort number in ascending  order
fruits.sort()
console.log(fruits)//sort alphabetically
console.log(a)
*/

/*
//The filter() method creates a new array filled with elements that pass a test provided by a function.
function checkAdult(number) {
  return number >=18;
}
function func() {
  var arr = [20,3,4,50,6];
  var value = arr.filter(checkAdult);
console.log(value);
}
func();
*/

/*
//Perform operation on every element of array
const arr=[1,2,3,4,5]
const map1= arr.map(x=>x**2)
console.log(map1)

*/

/*
//forEach() calls a function for each element in an array
let sum = 0;
const numbers = [1,2,3,4,5];

function myFunction(item) {
  sum += item;
}
numbers.forEach(myFunction);
console.log(sum)
*/
