/* *==>Promise */

/* *==>Re-resolve a promise? */
// What’s the output of the code below?

// let promise = new Promise(function(resolve, reject) {
//   resolve(1);

//   setTimeout(() => resolve(2), 1000);
// });

// promise.then(alert); //answer:- 1

/* *Delay with a promise */

function delay(ms) {
 let promise = new Promise((resolve,reject)=>{
   // return new Promise((resolve,reject)=>{

   setTimeout(resolve, ms);
 }) 
  return promise
}
delay(3000).then(() => alert("runs after 3 seconds"));