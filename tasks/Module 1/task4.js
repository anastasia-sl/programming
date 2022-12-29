class Animal{
    name;
    age;
    weight;
    health;
   isChild;

    constructor(name='', age=5, weight=20, health='', isChild=false) {
       this.name=name;
       this.age=age;
       this.weight=weight;
       this.health=health;
       this.isChild=isChild;

    }
}
let animal= new Animal('Kate', 1, 6, 'good', true,);
let animal2 = new Animal('Mike', 4,10, 'not bad', false);
let animal3 = new Animal('Misha', 10,90, 'good', false);
console.log(animal.age, animal2.weight, animal3.isChild);


let func= function(obj){
    if(!(obj instanceof Animal)){
        throw new Error('Error');
    }


}
// let obj={
//     name:'kate',
//     age:18,
// }
// console.log(func(obj));

console.log(func(animal2));
