// let a = 19;

// if (a > 10) {
//   console.log('IF 1');
// } else if (a > 20) {
//   console.log('IF 2');
// } else {
//   console.log('ELSE ');
// }
// условие ? действие 1 : действие


// let b = a >= 20 ? a + 1 : a - 1;
// let b;
//
// if (a >= 20) {
//   b = a + 1;
// } else {
//   b = a - 1;
// }

// console.log(b);

/* SWITCH CASE DEFAULT */
// let size = 'XXL'; // S M L
//
// switch (size) {
//   case 'XS':
//   case 'S':
//     console.log('Good');
//     break;
//   case 'M':
//   case 'L':
//     console.log('Not good');
//     break;
//   default:
//     console.log('Big size');
// }


/* FOR (FOR IN для объектов, FOR OF для массивов) */
/* for (итератор;  условие; изменение итератора) */


// let mass = [1,2,3,4,5,6];
// for (let i = 10; i < mass.length; i++) {
//   console.log(`Element [${i}] has value ${mass[i]}`);
// }


// Цикл для перебора массива поочереди поэлементно начиная с начала. В переменной digit хранится значение ТЕКУЩЕГО элемента массива
// let digits = [1,2,3,4,5,6];
// for (let digit of digits) {
//   console.log(`Current digit [${digit}]`);
// }


// Цикл для перебора свойств объекта. В Каждой итерации переменная field хранит имя параметра
// let user = {
//   name: "Alex",
//   age: 20,
//   age2: 20,
//   age4: 20,
//   age6: 20,
// }
// for (let field in user) {
//   console.log(`Field [${field}] has value ${user[field]}`);
// }


// пример бесконечного цикла
// for (;;) {
//   console.log(`Я бесконечный цикл. Попробуй меня останови`);
// }

/* циклы WHILE и DO...WHILE */
// let counter = 0;
// while (counter < 100) {
//   console.log(`Я бесконечный цикл. Попробуй меня останови`);
//   counter++;
// }

// do {
//   console.log(`Start`);
// } while (true);




// РАБОТА СО СВОЙСТВАМИ ОБЪЕКТА

let user = {
  name: "Alex",
  age: 20,
  hand: {
    size: 10
  },
};

// let field = 'name';
// console.log(user.name);
// console.log(user['name']);
// console.log(user[field]);


// let mass = [1,2,3,4,5,6];
// console.log(mass[1]);
// console.log(mass[10]);


// ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА

// классическое определение переменных
// let name = user.name;
// let age = user.age;


// деструктурирующее определение переменных
let {
  name: userName, //переименование переменной конкретного свойства
  age,
  weight: userWeight = 50, //переименование переменной и значение по умолчанию
  hand,
  unknownProp = 'some value' //значение по умолчанию, если параметра не сущестует
} = user;

// hand.size++;
//
// console.log(userName);
// console.log(userWeight);
// console.log(user);
// console.log(age);


// классическое клонирование объекта
let userClone = {
  name: user.name,
  age: user.age,
  hand: user.hand,
};

// деструктурирующее клонирование объекта
let {...userClone2} = user;
let userClone3  = {...user};

// userAges.hand.size++;
//
// console.log(userAges);
// console.log(user);
// console.log(user.hand === userAges.hand);





// ДЕСТРУКТУРИЗАЦИЯ  МАССИВА

let googleResponse = ['Alya', 20, 49];

// деструктурирующее клонирование массива
let googleResponseClone = [...googleResponse];

// деструктурирующее присваивание значений элементов массива определяемым переменным. Запятой можно пропускать неинтересующие элементы массива
let [,,weight, unknownElement = 'some value'] = googleResponse;

console.log(weight);
