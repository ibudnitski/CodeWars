/* function f1(){
    console.log("f1 call");
}

f1();

const f2 = function(){
    console.log('Log for F2 function');
    console.log(f2.name);
};

f2();

const f3 = f2;

f3(); */

/* let sum = (a,b) => a+b;

console.log(sum(2,3)); */

let sum2 = (a,b) => {
    if(a > b){
        return " A more then B"
    }else{
        return "B is larger!"
    }
}
;

console.log(sum2(2,3));

