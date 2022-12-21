class Form {
  age;
  name;
  phone;
  email;

  run() {
    console.log(`Hi! My name is ${this.name}! I am going!`);
  }

  constructor(age=18,  name='Joh',  phone='+3800000000000', email='') {
    this.age = age;
    this.name=name;
    this.phone = phone;
    this.email = email;
  }

}

let form = new Form(20, 'Alex');
let form2 = new Form;
let customObject = {
  name: 'Alex',
  age: 24,
  run: () => { console.log('I am going');}
};

function print(form) {
  if(!(form instanceof Form)) {
    throw new Error('Invalid argument [form]');
  }

  form.run();

  console.log(form);
}






// print(form);
// print(form2);
// print(objet);

// let objet = {
//   name: 'Alex',
//   age: 24,
//   run: () => { console.log('I am going');}
// };
//
// let objet2 = new Object({
//   name: 'Alex',
//   age: 24,
//   run: () => { console.log('I am going');}
// });

// console.log('form info => ', form.age);
// console.log('form info 2 => ', form2)

// console.log('objet info  => ', objet)
// console.log('objet info 2 => ', objet2)



// console.log('1 type => ', typeof true);
// console.log('2 type => ', typeof 12);
// console.log('3 type => ', typeof NaN);
// console.log('4 type => ', typeof 'asd');
// console.log('5 type => ', typeof {});
// console.log('6 type => ', typeof []);
// console.log('9 type => ', typeof form);
// console.log('7 type => ', typeof null);
// console.log('8 type => ', typeof undefined);

// let boolean1 = true;
//
// let boolean2 = Boolean;
// let boolean2 = Number;
// let boolean2 = String;


// console.log('Boolean', Boolean(true));
// console.log('Number', Number());
// console.log('String', String());
//
//
console.log('1 instanceof [true instanceof Boolean] => ', true instanceof Boolean);
console.log('2 instanceof [12 instanceof ] => ', 12 instanceof Number);
console.log('3 instanceof [NaN instanceof Number] => ', NaN instanceof Number);
console.log('4 instanceof [asd instanceof ] => ', 'asd' instanceof String);
console.log('5 instanceof [{} instanceof Object] => ', {} instanceof Object);
console.log('6 instanceof [[] instanceof Array] => ', [] instanceof Array);
console.log('9 instanceof [form instanceof Form] => ', form instanceof Form);
console.log('7 instanceof [null instanceof Object] => ', null instanceof Object);
console.log('8 instanceof [undefined instanceof Object] => ', undefined instanceof Object);


