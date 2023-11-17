/* All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: 
the dish must start and end with the same letters as the animal's name. For example, the great blue heron 
is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to 
indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
beast and dish may contain hyphens and spaces, 
but these will not appear at the beginning or end of the string. They will not contain numerals. */


function feast(beast, dish) {
    let beastArray = [beast.charAt(0), beast.charAt(beast.length - 1)];
    let dishArray = [dish.charAt(0), dish.charAt(dish.length - 1)];
    return JSON.stringify(beastArray) === JSON.stringify(dishArray) ? true : false;
    }

/* let str = "Test";
let strArr = [];
console.log(str.charAt(str.length - 1));
strArr.push(str.charAt(str.length - 1));
console.log(strArr); */


console.log(feast("great blue heron", "garlic naan"));