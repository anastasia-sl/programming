function calc (a, b) {
  return a + b;
}

console.log(calc(12,14));
console.log(calc("HelLo"," World"));
console.log(calc("HelLo",14));
console.log(calc([1,2,3],[4,5,6]));
console.log(calc({ a: 10}, {b:20}));

let calc2 = calc;

let result = calc(24, 34);
let result2= calc2(24, 34);

console.log(result);
console.log(result2);

// function calcToLog (a, b) {
//   console.log(a + b);
// }
// let result2 = calcToLog(24, 34);



// let calc = function (a, b) {
//   return a + b;
// }
//
// function pow (a, b, calc2) {
//     let result = calc3(a,b);
//
//     return result * result;
// }
//
// console.log(pow(12,14, function (a, b) {
//   return a + b;
// }));

//
// let stack = [];
// let stackPush = function (value) {
//   stack.push(value);
// }
//
// let queue = [];
// let queuePush = function (value) {
//   queue.push(value);
// }
//
// let consoleLog = function (value) {
//   console.log(value);
// }
//
// let calc = function (a, b, callback) {
//   let result = a + b;
//   callback(result);
// }
//
// calc(12,14, stackPush);
// calc(1,5, queuePush);
// calc(7,5, consoleLog);
//
// console.log(stack);
// console.log(queue);

// let func = (a, b) => (a + b);
// let func1 = (a, b) => { return a + b };
// let func2 = (a, b) => ({ a: a, b: b });
