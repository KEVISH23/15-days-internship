// Module 2
/*  19-07-2023  */
// ------------------------ 2.1 Hello World ----------

// document.write("Namastey")

//--------------------- 2.1 task 2 -------------------
// alert("I'm JavaScript");

//--------------------- 2.4 task 1 -------------------
/* Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).  */

// let admin,name;
// name = "john";
// admin = name;
// alert(admin)

//--------------------- 2.4 task 2 -------------------
/*  Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?  */

// let ourPlanet,currentVisitor;

/* -------------------- 2.5 task (Output of following code..) ----------------------- */

// let name = "Ilya";

// alert( `hello ${1}` ); // hello 1

// alert( `hello ${"name"}` ); // hello name

// alert( `hello ${name}` ); // hello Ilya

/* --------------------- 2.6 task (get name from user and output it) --------------  */
// function getName(){
// let name = prompt("Enter your name!!!");

// if(confirm(`is your name ${name}?`)){
//     alert(`Welcome ${name}`);
// }else{
//     getName();
// }
// }
// getName();

/* ---------------- 2.8 task1 show aoutput -------------------- */

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// a=2 b=2 c=2 d=1

/*What are the values of a and x after the code below?*/

// let a = 2;

// let x = 1 + (a *= 2);

//a=2 x=5 wrong        a=4 x=5

/*What are results of these expressions?*/

// "" + 1 + 0 // "10"
// "" - 1 + 0  //-1
// true + false  //true  //1
// 6 / "3" //2
// "2" * "3"  //6
// 4 + 5 + "px"  //9px
// "$" + 4 + 5 //$45
// "4" - 2  //2
// "4px" - 2  //NaN
// "  -9  " + 5  // -9 5
// "  -9  " - 5 //-14
// null + 1  //1
// undefined + 1 //undefined //nan
// " \t \n" - 2 //NaN //-2

/*Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.*/

// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);

// alert(a + b); // 12

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));

// alert(a + b); // 12

/* -------------------------  2.10 task -------------------------- */
// let officialName = prompt("Enter official name of JavaScript..");
// if(officialName === "ECMAScript" || officialName === "ecmascript"){
//     alert("Wow!!!!")
// }else{
//     alert("You dont know ECMAScript");
// }

/*----------------------- 2.10 task ----------------------- */
// let number = Number(prompt("Eneter a number"));
// if(number>0){
//     alert("1");
// }else if(number < 0){
//     alert("-1");
// }else if(number === 0){
//     alert("0");
// }else{
//     alert("Kindly provide number only!!!!");
// }

/* -------------------2.10 task ---------------


let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
convert if to ?(ternary)
*/

// let result;
// let a =1;
// let b = 2;
// ((a+b)<4)?result='below':result='over';
// alert(result);

/*------------------------ 2.10 task --------------------

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

convert multiple if to multiple ? */

// let message;
// login == "Employee"
//   ? (message = "hello")
//   : login == "Director"
//   ? (message = "Greeting")
//   : login == ""
//   ? (message = "No login")
//   : (message = "");

/* ------------------  2.11 ------------- 
 Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
 
 */

// let age = Number(prompt("Enter the age..."));
// if(age>=14 && age<=90){
//     alert("In Range")
// }else{
//     alert("Not in range")
// }

/* ------------------ 2.11 -----------
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/
//Using !
// let age = Number(prompt("Enter the age..."));
// if(!(age>=14 && age<=90)){
//     alert("Not in range between 14 and 90");
// }else{
//     alert("In Range between 14 and 90");
// }
// Not using !

// let age = Number(prompt("Enter the age..."));
// if(age<14 || age>90){
//     alert("Not in range between 14 and 90");
// }else{
//     alert("In Range between 14 and 90");
// }

/* -------------- 2.11 Check the login -----------------*/
// let user = prompt("Who's There?");
// if (user == "Admin") {
//   let password = prompt("Enter Password..");
//   if (password == "THEMaster") {
//     alert("welcome");
//   } else if (password == null || password == "") {
//     alert("Cancelled");
//   } else {
//     alert("Wrong Password");
//   }
// } else if (user == null || user == "") {
//   alert("Cancelled");
// } else {
//   alert("I Don't Know You..");
// }
