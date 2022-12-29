function fnctn(obj){
    if (typeof obj !== 'object') {
        return obj;
    }

    let result;

    if (!Array.isArray(obj)){
      result=[...obj];
      let counter=0;

      for (let field of result) {
            if (typeof field === 'object') {
                result[counter] = fnctn(field);
            }
            counter++;
        }
    } else {
        result={...obj};

        for (let field in result) {
            if(typeof result[field] === 'object'){
                result[field]=fnctn(result[field]);
            }
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
    children:[1,2,3]
}

let cat2 = fnctn(cat);

cat2.name='bob';
cat2.eye.color='blue';
cat2.eye.obj.param1=false;
cat2.children[2]=20;

console.log(cat);
console.log(cat2);
