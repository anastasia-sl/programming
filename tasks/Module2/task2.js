
function a(obj){
    if(!Array.isArray(obj)){
       throw new Error('Argument is not an Array');
    }

    let newArr= [];

    for(let i = obj.length-1; i >= 0; i--){
        newArr.push(obj[i]);
    }

    return newArr;
}

const arr=[1, 10, 4, 8,];
console.log(a(arr));
