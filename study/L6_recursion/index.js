// ПРИМЕР РЕКУРСИИ для расчета суммы чисел в массиве

// const digits = [1,2,3,4,5,6,7,8];
//
// function recursive(digits, index, result) {
//   if (digits[index] === undefined) {
//     return result;
//   }
//
//   let digit =  digits[index];
//   result += digit;
//
//   return recursive(digits, index + 1, result);
// }
//
// const result = recursive(digits, 0, 0);
// console.log(result);


// КЛОНИРОВАНИЕ ОБъЕКТОВ
let user = {
  name: "Alex",
  age: 20,
  hand: {
    size: 10
  },
};

// деструктурирующее клонирование объекта слева от РАВНО, используется в большинстве случаев
let user2 = {...user};

// деструктурирующее клонирование объекта справа от РАВНО. Используется, когда нужно отфильтровать какие то параметры
let {...user3} = {...user};


//даже при клонировании объекта, если параметр, которы мы клонируем в другой объект, является объектом, то клонируется ссылка на него, а не сам объект
user2.name = 'Oleg';
user2.hand.size = 30;

//при изменении свойства hand у второго пользователя, этот параметр меняется и у первого
console.log(user);
console.log(user2);

