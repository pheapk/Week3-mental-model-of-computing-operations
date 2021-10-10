// Casting type

let a = '22'; //"22"
let b = 33; //33
let c = 44 //44
let x = Number(a) + b; //55
let y = Number(a) + String(b); //"2233"
let z = a + true; //"22true"
let i = b + false; //33
//true 1 //false is 0
let k = b + true; //34
let j = b + true + true; //35
let o = b + (true == true); //34
let f = [1,2]; 
let g = {a:1, b:2};
let h = f + c; //"1,244"
let l = g + c; // "[Object Object]44"
let m = f + g; // "1,2[Object Object]"
let n = Number(f) + 11; // NaN
let p = Number(g) + 11; // NaN
let q = Number(f) + "11"; //"NaN11"
let r = Number(g) + "11"; //"NaN11"
