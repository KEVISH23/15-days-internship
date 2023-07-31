/*  *Date Time 5.11 */

/* *==>Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
 */

// let date = new Date(2012,1,20,3,12)
// alert(date)

/* *==>Show a weekday */
// let date = new Date(2012, 0, 3);
// function getWeekDay(date){
//    let day = date.getDay();
//    switch(day){
//     case 0: return "SU";
//             break;
//     case 1: return "MO";
//             break;
//     case 2: return "TU";
//             break;
//     case 3: return "WE";
//             break;
//     case 4: return "TH";
//             break;
//     case 5: return "FR";
//             break;
//     case 6: return "SA";
//             break;
    
//    }
// }
// alert(getWeekDay(date));    

/* *EUROPEAN DAY */
// let date = new Date(2012, 0, 8); 
// function getLocalDay(date){
//     let day = date.getDay();
//     if(day==0){
//         day = 7
//     }return day
// }
// alert(getLocalDay(date));

/* *==>Which day of month was many days ago?  */
// let date = new Date(2015, 0, 2);
// function getDateAgo(date,dayBefore){
//     let dateCopy = new Date(date)
//     dateCopy.setDate(dateCopy.getDate() - dayBefore)
//     return dateCopy
// }
// alert( getDateAgo(date, 1) ); 
// alert( getDateAgo(date, 2) ); 
// alert( getDateAgo(date, 365) ); 
// let date = new Date();
// let newDate = date.getDate() - 3
// alert(newDate.getDay())

/* *==>last day of the month */
// function getLastDayOfMonth(year,month){
//     let date = new Date(year,month)
//     // alert(date.getMonth()+1)
//     date.setMonth(date.getMonth() + 1)
//     // alert(date)
//     date.setDate(date.getDate()-1)
//     alert(date.getDate())

    /* *easy solution
        let date = new date(year,month+1,0);
        alert(date.getDate())    
    */
// }
// getLastDayOfMonth(2023, 6);

/* *==>How many seconds have passed today? */

// function getSecondsToday(){
//     let nowDate = new Date()
//     let startDate = new Date()
//     startDate.setHours(0,0,0)
//     let newDate = nowDate - startDate
//     alert(newDate/1000)
// }

// getSecondsToday()

/* *How many seconds till tomorrow? */
// function getSecondsToTomorrow(){
//     let nowDate = new Date();
//     let tmrwDate = new Date();
//     tmrwDate.setHours(0, 0, 0);
//     tmrwDate.setDate(tmrwDate.getDate()+1)
//     let newDate = tmrwDate - nowDate;
//     alert(newDate / 1000);
// }
// getSecondsToTomorrow()


/* *5.12 json */

/* *==>Turn the object into JSON and back */
// let user = {
//   name: "John Smith",
//   age: 35,
// };

// let converted = JSON.stringify(user)
// alert(converted)
// let againObj = JSON.parse(converted)
// alert(againObj.name)

/* *6.1 recursion and stack */
/* *Sum all numbers till the given one */
        /* *Using recursion */
// let n = +prompt("Enter a number");
// function sum(n){
//     if(n==1){
//         return n
//     }else{
//         return n + sum(n-1)
//     }
// }
// alert(sum(n))

/* using loop */
// let n = +prompt("Enter a number");
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum+=i
// }
// alert(sum)

/* using aritmetic progression */
// let n = +prompt("Enter a number");
// let sum = ((n*(n+1))/2);
// alert(sum)

/* *==>Calculate factorial */
// let n = +prompt("Enter a number");
// function factorial(n){
//     if(n==1){
//         return 1
//     }else{
//        return n * factorial(n-1)
//     }
// }
// factorial(n)
// alert(factorial(n))

/* *==>Fibonacci numbers */
// let n = +prompt("Enter a number");
// let temp = 0
// function fib(n){
//     if(n==0 || n==1){//if(n<=1){ return n }
//         return 1
//     }else{
//         temp =  fib(n-1) + fib(n-2)
//         return temp
//     }
// }
// alert(fib(n-1))

/* *Output a single-linked list */
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// }
// let arr = [];
// function printList(list){
//     arr.push(list.value)
//     // console.log(arr)
//     if(list.next!=null){
//         printList(list.next)
//     }else{
//         alert(arr)
//     }
// }
// alert(printList(list))//
// printList(list);
// alert(arr)//

/* *Output a single-linked list in the reverse order  */
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// }
// let arr = [];
// function printListReverse(list){
//     arr.push(list.value)
//     // console.log(arr)
//     if(list.next!=null){
//         printListReverse(list.next)
//     }else{
//         alert(arr.reverse())
//     }

//     //  if (list.next) {
//     //    printListReverse(list.next);
//     //  }
//     //  alert(list.value);
    
// }
// printListReverse(list)