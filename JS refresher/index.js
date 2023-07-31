
// ----------------------------  JS exercise 1 --------------------

// console.log("js referesher");

// function combine(a=0,b=0,c=1){
//     return (a*(b/c))
// }

// const answer = combine(3,4,2);
// const answer2 = combine();
// console.log(answer);
// console.log(answer2);


// ----------------------------  JS exercise 2 --------------------

// const transformToObject = (ar)=>{

//     const objAr = ar.map((items)=>{
//         return ({val:items});
//     });
//     return objAr;
// }

// const toObject = transformToObject([1,2,3,4,5]);
// console.log(toObject);


// ----------------------------  Destructuring for array we use [] brackets --------------------

// const userName = ["Amrerndra","Bahubali"];
// let firstName = userName[0];
// let lastName = userName[1];

// const [firstName,lastName] = ["Amrerndra","Bahubali"];


// console.log(firstName + "  " + lastName);


// ----------------------------  Destructuring for object we use {} brackets --------------------
// const userName = {
//     firstName:"Amrendra",
//     lastName:"Bahubali"
// }

// let firstName = userName.firstName;
// let lastName = userName.lastName;

// const {firstName,lastName} = {
//     firstName:"Amrendra",
//     lastName:"Bahubali"
// }
// console.log(firstName + "  " + lastName);

// ----------------------------  Destructuring in function parameter --------------------

// function destructuring  ({firstName,lastName}) {
  
//   console.log(firstName + "  " + lastName);
// }

// const userName = {
//   firstName: "Amrendra",
//   lastName: "Bahubali",
// };

// destructuring(userName);


// ----------------------------  spread operator --------------------

// const userName1 = {
//       firstName: "Amrendra",
//       lastName: "Bahubali",
//     };
// const userName2 = {
//       fname: "Mahendra",
//       lname: "Bahubali",
//     };
    
//     const mergeUserName = {...userName1,...userName2};
//     console.log(mergeUserName);
    // const userName1 = ["Amrerndra", "Bahubali"];
    // const userName2 = ["Mahindra", "Bahubali"];

    // const mergeUserName = [...userName1,...userName2];
    // console.log(mergeUserName);

    
// ----------------------------  conditional statements --------------------

// if(10 == "10"){
//     console.log(true);
// }

// if(10 === "10"){
//     console.log(true);
// }else {
//     console.log(false);
// }

// ----------------------------  setTimeOut setInterval --------------------


// const time = prompt("Enter the time in seconds");
// let sec = 0 ;
// const handleSeconds = () => {
//     sec++;
//     console.log(sec);
// };
// interval = setInterval(handleSeconds, 1000);
// setTimeout(()=>{
    
//     console.log("times UP");
//     clearInterval(interval);
// },(parseInt(time)*1000))


// const time = prompt("Enter the time in seconds");
// let sec = 1;
// console.log(1);
// const handleSeconds = () => {
//   sec++;
//   console.log(sec);
//   if (sec == time) {
//     clearInterval(interval);
//   }
// };
// interval = setInterval(handleSeconds, 1000);
// setTimeout(() => {
//   console.log("times UP");
// }, parseInt(time - 1) * 1000);