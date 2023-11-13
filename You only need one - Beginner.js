/* You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    return a.includes(x);
  }
let numArr = [101, 45, 75, 105, 99, 107];
console.log(check(numArr, 107));

let strArr = ['t', 'e', 's', 't'];
console.log(check(strArr, 'e'));