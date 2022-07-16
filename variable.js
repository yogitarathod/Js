const a = 15; // const can not reasined

function test(){   
    
    if(b=20) {
        var b = 20; // var has funcional scope can not used outside the function
        let c = 35;  // let has blcok scoped can not used outside he block
        const d = 15;
        c = 45;
        console.log(b,c,d); 
    }
    // console.log(b,c,d);
    console.log(b);
// c = 40;
}
test();
// console.log(b);

var e;
console.log('The value of e is ' + e); // The value of e is undefined
console.log('The value of f is ' + f); // The value of f is undefined
var f;

let g;
console.log('The value of g is ' + g); // The value of g is undefined
console.log('The value of h is ' + h); // Uncaught ReferenceError: h is not defined
let h;

let sum;
sum + 2;  // Evaluates to NaN