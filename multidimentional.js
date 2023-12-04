const arr = [
    [1,2,3,4,5],
    [11,12,13,],
    [17,23,22,12],
];

for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
        if (arr[i][k] % 2 == 0) {
            console.log(arr[i][k]);
        }
    }
}