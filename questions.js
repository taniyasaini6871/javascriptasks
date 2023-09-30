/* Q1. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
get(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
get([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
get([true, false, true, false, false]) ➞ { true: 2, false: 3 }
get([]) ➞ {} */

let arr1 = ["A", "B", "A", "A", "A"];
let arr2 = [1, 2, 3, 3, 2];
let arr3 = [true, false, true, false, false];
let arr4 = [];

function countelement(arr) {
    // object use to store the elements and and no. of times they occur
    let count = {};
    for (let element of arr) { 
      if (count.hasOwnProperty(element)) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    }
    return count;
  }
  console.log(countelement(arr1));
  console.log(countelement(arr2));
  console.log(countelement(arr3));
  console.log(countelement(arr4));

  /*Q2. The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:
  [1, [2, 3]]
   2 elements, number 1 and array [2, 3]*/

let arr = [1, [2, 3 ,[4, 10 ,12 ,[45,9]]]];
let arrlength = arr.flat(Infinity);
let length = arrlength.length;
console.log(`Number of elements at depth ${arrlength}: ${length}`);

/* Q3. Given a word, create an object that stores the indexes of each letter in an array.
Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.
mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] } */

function mapLetters(val){
    let obj = {};
    let arr = val.split("");
  arr.forEach((item,index) => {
       if(!obj[item]){
            obj[item] = [index]
       }else {
            obj[item].push(index);
       }
  });
   return obj;   
  }

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));

/* Q4-You go to a jewelry shop and try to find the most expensive piece of jewelry. You write down the name of each piece of jewelry and its price.
Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".
mostExpensive ({
 "Diamond Earrings": 980,
 "Gold Watch": 250,
 "Pearl Necklace": 4650
}) ➞ "The most expensive one is the Pearl Necklace"*/

const jewelry = {
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650 
}
function maxprice(jewelry) {    
    const maximum = Object.values(jewelry).reduce((maxnum, num) => {
        return Math.max(maxnum, num);
      }, -Infinity);
      return `The expensive one is  ${maximum}`;
}
console.log(maxprice(jewelry));

/*Q5. Create a function that takes one, two or more numbers as arguments and adds them together to get a new number. The function then repeatedly multiplies the digits of the new number by each other, yielding a new number, until the product is only 1 digit long. Return the final product.
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 = 16
// 1 * 6 = 6 */

function sumDigProd(a, b){
    let sum = a + b;
    let num1 = Math.floor(sum / 10);
    let num2 = sum % 10;
    let product = num1 * num2;
    let num3 = Math.floor(product / 10);
    let num4 = product % 10;
    let finalnum = num3 * num4;
    return `The final product is  ${finalnum}`
 }
 
 console.log(sumDigProd(16,28));

