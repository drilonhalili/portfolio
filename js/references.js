/* Write an object that consists from these key-value pairs:
k: name v: your name
k: age v: your age
k: address v: your address (as Object) --> k: street v: your street name k: number v: your street number k: city v: your city
*/

/* Write few arrays that consists of these elements:
1. list of numbers from 1 to 10
2. list of names
3. mixed content
*/

/* Assign the created object and array to new variables.
Then try to change some values inside this newly created complex data structures with this sintax:

    For the object:
    NewObject.property = some value; (NewObject is the newly created object after the assignment expression)

    For the array:
    NewArray[index] = some value; (NewArray is the newly created array after the assignment expression)

*/

/* Expected results */
//console.log(OriginalObject) --> ?
//console.log(OriginalArray) --> ?
//console.log(NewObject) --> ?
//console.log(NewArray) --> ?

// Reassign reference type example

/*
let obj = { first: 'reference' };
let obj2 = obj;

obj = { second: 'ref2' }

console.log(obj2) --> ?
*/

//Object
const person = {
  name: "Drilon",
  age: 29,
  address: {
    street: 164,
    number: 12,
    city: "Tetovo"
  }
}

//Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const names = ["John", "Mike", "Mosh"]
const mixedContent = ["John", 29, 10, "Mike"]