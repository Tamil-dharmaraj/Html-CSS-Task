//push method
let arr=[1,2,3,4,5];
arr.push(6);
console.log(arr);
//shift method
arr.shift();
console.log(arr);
//pop method
arr.pop();
console.log(arr);
//unshift method
arr.unshift(6,7);
console.log('unshift');
//concat method
let arr1 =[1,2,3,4];
let arr2 =[5,6,7,8,9];
console.log(arr1.concat(arr2));
//position
 //let arr4 =[1,2,3,4,5[a,b],7,8];
 //console.log(arr[5]);
 //reverse method
 //let name =[Tamizh];
//name.reverse();
//console.log(name);
//splice method
let arr5=[1,2,3,4,5,6]
console.log(arr5);
arr5.splice(3,1,'a');
console.log(arr5,'splice');
//slice method
let slice1 =  arr5.slice(1,4);
console.log(slice1,'slice');
//map method
let example =[1,2,3,4,5];

let test = example.map((x) => x + 2 )
let test2 = example.map(test2Function)


function test2Function(x) {
       let tt = x*2
    return  tt + 2;
}

console.log('old',example);
console.log('new',test);
console.log('new2',test2);
//
