/* Function declaration */

// function sum(a,b){
//     return a+b;
// }


/* Function expression */

// let sum = function(a,b){
//     return a+b;
// }

/* JS Arrow Function declaration */
// let sum = (a,b) => {
//     return a + b;
// }
// let sum2 = () =>  Math.round(Math.random() * 100);
// let sum3 = (count) =>  Math.round(Math.random() * count);


// console.log(sum(5,3));
// console.log(sum2());
// console.log(su

let count = 0;
let action = () => console.log(`Repeating ${++count}`);


setInterval(action, 300)

