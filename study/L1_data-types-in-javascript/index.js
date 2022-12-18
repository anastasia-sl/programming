let numb = 1;
let bool = true;
let str = "String";

let obj = {
  a: 10
};

let numb2 = 1;
let bool2 = true;
let str2 = "String";

let obj2 = {
  a: 10
};

let objString = JSON.stringify(obj);
let objString2 = JSON.stringify(obj2);

console.log(numb === numb2);
console.log(bool === bool2);
console.log(str === str2);
console.log(obj === obj2);

console.log(objString);
console.log(objString2);
console.log(objString === objString2);

let integer = 10;


let object = {a: 10};
let ar = [object, object, object, 12, 14, 15];

ar[0].b = 14;



