const arr = [
    [1,2,3,4,5],
    [11,12,13,],
    [17,23,22,12],
];

// let result = [];

/* for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] % 2 == 0) {
            arr.splice(arr[i][k], 1);
        }
    }
}

for (let iterator of arr) {
    for (let elem of iterator) {
        if(elem % 2 == 0){
            result.push(elem);
        }
    }
} */

console.log(arr.map(item => item.filter(num => num % 2 == 0)));
console.log(arr);