/*     21/7/2023 */

/* *------------->5.4<--------------  */

/**What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // 4 */

/* *
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.

*/

// let styles = ["Jazz","Blues"];
// alert(styles);
// styles.push("Rock-n-Roll")
// alert(styles)
// let midValue = Math.ceil(styles.length/2);
// console.log(midValue);
// styles[midValue-1] = "Classics";
// alert(styles)
// styles.shift();
// alert(styles)
// styles.unshift("Rap","Reggae")
// alert(styles)

/* *Sum input numbers */
// function sumInput(){

//     let arr = [];
//     let sum = 0;
//     while (true) {
//         // alert(parseInt("a"));
//       let num = prompt("Enter a number");
//       if (num === "" || num === null || !isFinite(+num)) {
//         break;
//       } else {
//         arr.push(+num);
//       }
//     }
//     for(no of arr){
//         sum+=no;
//     }
//     alert(arr)
//     alert("Addition :- " + sum)

// }
// sumInput()

/* *A maximal subarray */

// let arr = [-2, -1, -2, -3, -9];
// let sum = 0
// let maxSum = 0;
// for(let i=0;i<arr.length;i++){
//     for(let j = i;j<arr.length;j++){
//         sum+=arr[j];
//         maxSum = Math.max(maxSum,sum);
//     }
// }
// alert(maxSum)

/* *------------>5.5<------------------- */

/* *Translate border-left-width to borderLeftWidth */

// let string = prompt("enter-a-string","this-is-a-string");
// function camelize(string){
//     let arr = [];
//     arr = string.split("-");
//     alert(arr)
//     for(let i=1;i<arr.length;i++){
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
//     }
//     alert(arr)
    // let newStr = '';
    // let newStr = arr.join("");
    // for(elem of arr){
    //     newStr+=elem;
    // }
    // alert(newStr);

// }
// camelize(string)

// let string = prompt("enter-a-string", "this-is-a-string");

// function camelize(str) {
//   return str
//     .split("-") 
//     .map(
//       (word, index) =>
//         index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join("");
// }

// let newStr = camelize(string);
// alert(newStr)

/* *Filter range */
// let arr = [5, 3, 8, 1];
// function filterRange(arr,start,end){
//     let reArr = arr.filter(val=> val>=start && val<=end)
//     return reArr;
// }
// let filtered = filterRange(arr, 1, 4);
// alert(filtered);
// alert(arr);

/* *Filter range "in place"  */
let arr = [5, 3, 8, 1];
function filterRangeInPlace(arr, start, end) {
//   arr.forEach((val, index) => {
//     if(val<start && val>end){
//         arr.slice(index,1)
//     }
//   });
for(let i=0;i<arr.length;i++){
    if(arr[i]<start || arr[i]>end){
        arr.splice(i,1)
        i--
    }
}
}
filterRangeInPlace(arr, 1, 3);
alert(arr);