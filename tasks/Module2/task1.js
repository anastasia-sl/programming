function fnctn(obj){
    let result= {...obj};

    for (let field in result) {
        if(typeof result[field] === 'object'){
            result[field]=fnctn(result[field]);
        }
    }


    return result;
}
let cat={
    color:'grey',
    name:'kate',
    age:10,
    eye:{
       color:'green',
       size:'big',
       obj:{
         param1:true,
         param2:20,
       }
   } ,
}

let cat2 = fnctn(cat);

cat2.name='bob';
cat2.eye.color='blue';
cat2.eye.obj.param1=false;

console.log(cat);
console.log(cat2);
