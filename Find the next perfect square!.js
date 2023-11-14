/* You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output) */

function findNextSquare(sq) {
    if(!Number.isInteger(Math.sqrt(sq))){
        return -1;
    }

    while(true){
        sq++;
        let sq2 = Math.sqrt(sq);
        if(Number(sq2) === sq2 && sq2 % 1 !== 0){
            continue;
        }else{
            return sq;
        }
    }
}

console.log(findNextSquare(155));