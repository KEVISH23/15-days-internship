/*  *6.3 Variable Scope and closure */

/* *==>Does a function pickup latest changes? */

// let name = "John";
// function sayHi() {
//   alert("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"? answer:- Pete

/* *==>Which variables are available? */
// function makeWorker() {
//   let name = "Pete";

//   return function() {
//     alert(name);
//   };
// }
// let name = "John";
// create a function
// let work = makeWorker();
// call it
// work(); // what will it show? answer:- Pete

/* *==>Are counters independent?  answer:- Yes */
// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++;
//   };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // ?  ans:- 0
// alert( counter2() ); // ?  ans:- 1

/* *==>Counter object */
// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ? ans:- 1
// alert( counter.up() ); // ? ans:- 2
// alert( counter.down() ); // ? ans:- 1

/* *==>Look at the code. What will be the result of the call at the last line? */
// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi(); //it will show an error

/* *==>Write function sum that works like this: sum(a)(b) = a+b.
Yes, exactly this way, using double parentheses (not a mistype). */

// function sum(a){

//     return function(b){
//         return a+b
//     }
// }
// alert(sum(2)(3))

/* *==>What will be the result of this code? */
// let x = 1;

// function func() {
//   console.log(x); // ? answer:- ERROR: cannot access x before initialization

//   let x = 2;
// }

// func();

/* *==>Filter through function */
// let arr = [1, 2, 3, 4, 5, 6, 7];
// function inBetween(a,b){
//     console.log()
//       return function (val) {
//         return val>=a && val<=b
//       };
// }
// function inArray(ary){
//     // console.log(...ary)
//     // let contentArr = []
//     return function(val){
//         // console.log(val)
//         // for(let i=0;i<ary.length;i++){
//         //     if(ary[i] == val){
//         //         console.log(arr[i],val)
//         //         contentArr.push(val)
//         //     }
//         // }
//         // console.log(contentArr)
//         return ary.includes(val)?val:null
//     }
// }
// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

/* *==>Sort by field */
// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// function byField(field){
//     // console.log(field)
//     // let data = field
//     // return function(a,b){
//     //     // console.log(a[field])
//     //     return a[field] > b[field] ? 1 : -1;
//     // }
//  return (a,b) => a[field]>b[field]?1:-1

// }
// function byField(fieldName){
//   return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }
// users.sort(byField("age"));
// console.log(users)
// users.sort(byField("name"));
// console.log(users);

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   while (i < 10) {
//     let shooter = function() { // create a shooter function,
//       alert( i ); // that should show its number
//     };
//     shooters.push(shooter); // and add it to the array
//     i++;
//   }

//   // ...and return the array of shooters
//   return shooters;
// }

// let army = makeArmy();

// // all shooters show 10 instead of their numbers 0, 1, 2, 3...
// army[0](); // 10 from the shooter number 0
// army[1](); // 10 from the shooter number 1
// army[2](); // 10 ...and so on.

/* *golabal object of JS  */
// window.alert("namaste duniya")
// globalThis.alert("namaste")

/* *Set and decrease for counter */
// function makeCounter() {
// let count = 0
// function counter(){
//     count++
// }
//  function set(val) {
//    count = val;
//  }
//  function decrease() {
//    alert(--count);
//  }
// counter.set = val =>count = val
// counter.decrease = () => count--
// return counter

// }

// let counter = makeCounter();

// alert( counter.set(10) ); // 10
// alert(counter.decrease())

/* *==>Output every second  using setInterval*/
// function printNumbers(from, to) {
//   let timerId = setInterval(() => {
//     console.log(from++);
//     if (from > to) {
//       clearInterval(timerId);
//     }
//   }, 1000);
// }
// printNumbers(1, 5);

/* *==>Output every second  using nested setTimeout*/
// function printNumbers(from,to){
      
//     let timerId = setTimeout(function tick(){
//         console.log(from++)
//       if (from < to) {
//           timerId = setTimeout(tick,1000)       
//       }
//     }, 1000);
// }