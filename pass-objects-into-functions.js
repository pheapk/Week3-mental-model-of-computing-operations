
let a = {a: 1};
const f1 = function f1(b) {
    b.x = 3;
    return b;
}
let result = f1(a);
console.log(result);

//>> {x: 3}

//////////////////////


let a = {a: 1};
const f1 = function f1(b) {
    b.x = 3;
    return b;
}
f1(a);
console.log(a);

//>> {x: 3}

///////////////


let a = {a: 1};
const f1 = function f1(b) {
    b.x = 3;    
}
f1(a);
console.log(a);

//>> {x: 3}

// All give the same result becuase of pssing by referce. 




