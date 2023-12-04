/* Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
    let result = 1;
    for (let index = 0; index < x.length; index++) {
        result *= x[index];
    }
    return result;
}

console.log(grow([1,2,3,4]));