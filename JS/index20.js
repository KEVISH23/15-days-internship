/*     DATE 20-07-2023       */

/* --------------- 2.13   --------------

--->What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}
ANSWER = 1


--->For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

1.
The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

//OUTPUT => 1,2,3,4.

2.
The postfix form i++

let i = 0;
while (i++ < 5) alert( i );
//OUTPUT  => 1,2,3,4,5

DOES NOT PROVIDE SAME O/P
*/

/*   O/P USING FOR LOOP  

For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

1.
The postfix form:

for (let i = 0; i < 5; i++) alert( i );

=> O/P -> 0,1,2,3,4

2.
The prefix form:

for (let i = 0; i < 5; ++i) alert( i );

=> O/P -> 0,1,2,3,4

YES THEY BOTH PROVIDE SAME O/P
*/

/*   Output even numbers in the loop
importance: 5
Use the for loop to output even numbers from 2 to 10. */

// for(let i=2; i<=10 ; i+=2){
//     alert(i);
// }

/* Replace "for" with "while"  

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

*/

// let i=0;
// while(i<3){
//   alert(`number ${i}!`);
//   i++;
// }

/*    Repeat until the input is correct  */

// while (true) {
//   let number = Number(prompt("enter a number greater than 100"));
//   if (number > 100) break;
// else if (number == null || number == "")  break;
//  else continue;
// }

/* Output prime numbers  */

//  let number = Number(prompt("Enter a number"));
//  for(let j = 2;j<=number;j++){
//    let flag = true;

//    for (let i = 2; i < j; i++) {
//      console.log(j)
//      if (j % i == 0) {
//        flag = false;
//        break;
//      }
//    }

//    if(flag){
//      document.write(j+", ")
//    }

//  }

/* ------------------- 2.14 ------------------*/

/* --> Rewrite the "switch" into an "if" */

// if(browser == "Edge"){
//   alert("you have got the Edge!");
// }else if(browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera" ){
//     alert("Okay we support that too");
// }else{
//   alert("We hope that this page looks okay!!");
// }

/*  ---> Rewrite "if" into "switch"  */

// let a = +prompt("a?",'')
// switch(a){
//   case 0: alert(0); break;
//   case 1: alert(1); break;
//   case 2:
//   case 3:
//     alert('2,3');
//     break;
// }

/* -----------------------------> 2.15   <--------------------*/

/* ---> Rewrite the function using '?' or '||'  */
// function checkAge(age){
//  return age > 18 ? true : confirm("Did parents allow you?");
// }
// function checkAge(age){
//  return (age > 18) || confirm("Did parents allow you?");
// }
// checkAge(2)

/* --->  Function min(a, b)  */

// function min(a,b){
//   if(a<b){
//     return a;
//   }return b;
// }

// let minimum = min(5,10);
// alert(minimum)

/*  --->  Function pow(x,n)    */

// function pow(x,n){
//   let num =1;
//   while(n>0){
//     num *=x;
//     n--;
//   }
//   return num;
// }

// let power = pow(2,8);
// alert(power)

/* -----------------> 2.17 <---------------- */

/*  ---> Rewrite with arrow functions */

// let ask = (question,yes,no)=>{
//   if(confirm(question)) yes();
//   else no();
// }

// ask("Do you agree?",()=>{alert("you agreed")},()=>{alert("you cancelled the execution")});

/* ---------------------------> 4.1 <--------------------------  */

/**
 * Write the code, one line for each action:*/
// Create an empty object user.

// let user = {};
// Add the property name with the value John.
// user.name="John";
// Add the property surname with the value Smith.
// user.surname = "Smith"
// Change the value of the name to Pete.
// user.name = "Pete"
// Remove the property name from the object.
// delete user.name;

/*  --> Check for emptiness */

// function isEmpty(obj){
//   for(let key in obj){
//     return false;
//   }
//   return true;
// }

// let schedule = {};
// let schedule1 = {"name":"bahubali"}

// alert(isEmpty(schedule));
// alert(isEmpty(schedule1));\

/* --> Sum object properties  */
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for(let key in salaries){
//   sum+=salaries[key];
// }
// alert(sum)

/* ----> Multiply numeric property values by 2 */
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj){
//   for(let key in obj){
//     if(typeof(obj[key]) == "number"){
//       console.log(obj[key] = obj[key]*2)
//       obj[key] =  obj[key]*2
//     }
//   }
// }
// console.log(menu)

/* -----------> 4.5 <--------------*/

/* ---------> Create new Calculator */

// function Calculator(){
//   this.read = function(){
//     this.a = +prompt("Enter a")
//     this.b = +prompt("Enter b")
//   }
//   this.sum = function(){
//     return this.a + this.b;
//   }
//   this.mul = function(){
//     return this.a * this.b;
//   }
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

/* --> Create new Accumulator */
// function Accumulator(initial){
//   this.value = initial;
//   this.read = function(){
//       this.value += +prompt("Enter a number","0");
//   }
// }

// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

/* -------------->5.3<--------------- */

/* * Uppercase the first character */
// let str =  prompt("Enter a string:-");
// str = str.charAt(0).toUpperCase() + str.slice(1);
// alert(str)

/* *Check for spam */
// let str = prompt("Enter a string:-");
// function checkSpam(str){
//     if(str.includes("viagra") || str.includes("Viagra") || str.includes("xxx") ){
//         return true
//     }else{
//         return false
//     }
// }

// alert(checkSpam(str))

/* *Truncate the string */

// let str = prompt("Enter a string:-");
// let maxLen = Number(prompt("Enter the Max length.."))
// function truncate(str,maxLength){
//     let newstr;
//     if(str.length > maxLength){
//         newstr = str.slice(0,maxLength) +"...";
//     }else{
//         newstr = str.slice(0,maxLength);
//     }
//     return newstr;
// }
// alert(truncate(str,maxLen));

/* *Extract the money */
// let money = parseInt(prompt("Enter a money in dollar format","$20"));
// alert(money);

// let money = prompt("Enter a money in dollar format","$20");
// function extractCurrencyValue(money){
//     return money.slice(1);
// }
// alert(extractCurrencyValue(money))