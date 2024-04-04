
// JS INTRO

// var message = 'Hello world'; 

// var age = 18;
// age = "Done";

// console.log(message);

// //loosely typed
// //strictly typed

// //statically typed
// //dynamically typed


// VAR
// function env(){
//     console.log(message)
    
//     var message = "hello";
    
//     console.log(message)
    
//     var message = "else";
    
//     console.log(message);
// }

// function env(){
//     for(var i = 0; i<5; i++){
//         console.log('--',i);
//     }
//     console.log(i);
// }
// env();

// LET
// console.log(message);
// let message = "Hello";
// console.log(message);

// CONST
// const message;
// // message = 'else';
// console.log(message);

// message = 'else';
// console.log(message);

// let _ = 'abcd';
// _ = 'abbd';
//  console.log(_)

// let arr = ['a', 'b', 'c', 'd'];

// arr[0] = 'abcd';

// console.log(arr);

// let str = '12';

// let age = 20;

// let ans = age + (str*1);

// console.log(ans);




// let str = '12';
// let p = parseInt(str);
// let n = Number(str);
// console.log(p, n);


// let str = '12.12';
// let p = parseInt(str);
// let n = Number(str);
// console.log(p, n);

// let str = '12a';
// let p = parseInt(str);
// let n = Number(str);
// console.log(p, n);

// let a = ['a', 'b', 'c', 'd'];

// let cpy = [...a];

// console.log(a, cpy);


// if(a==cpy){
//     console.log('1.yes');
// }
// else{
//     console.log('1.no');
// }

// if(a===cpy){
//     console.log('2.yes');
// }
// else{
//     console.log('2.no');
// }


// !=
// !==

// const a=  'My';
// const b =  'name';
// const c =  'is';
// const d = ':'
// const str = 'Khan';
// const ans = `${a} ${b} ${c}${d} ${str}`;
// const ans2 = a + ' ' + b + ' ' + c + d + ' '+ str;
// console.log(ans);
// console.log(ans2);


// function print( str = 'nothing is here' ){
//     console.log(str);
// }

// print();

// let a = ' ';
// if(a){
//     console.log('yes')
// }
// else{
//     console.log('no');
// }

// function sum(a, b){
//     if(a && b){
//         console.log(a+b);
//     }
//     else if(a){
//         console.log(a);
//     }
//     else{
//         console.log(0);
//     }
// }

// sum();
// sum(2);
// sum(2,3);



// function sum(a=0, b=0){
//     console.log(a+b);
// }

// sum();
// sum(2);
// sum(2,3);

// print();
// a();
// b();

// // function declaration
// function print(){
//     console.log('--');
// }
// // function assignment ( named )
// let a = function print(){
//     console.log('--');
// }
// // function assignment ( anonymous )
// let b = function (){
//     console.log('--');
// }
// // arrow function assignment
// let c =  () => {
//     console.log('--');
// }

// print();
// a();
// b();
// c();


// let a = 20;

// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break;
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3');
//     }
// }

// const obj = new Object();
// obj[1] = 'one';
// obj['name'] = 'Likhilesh';
// obj[12] = 'twelve';
// console.log(obj);

// const obj = {};
// obj[1] = 'one';
// obj['name'] = 'Likhilesh';
// obj[12] = 'twelve';
// console.log(obj);



// const obj = {
//     'firstName': 'Ajay',
//     'lastName' : 'Singh',
//     'age':20,
//     'address': 'Delhi',
// };

// const fullName1 = obj.firstName + ' ' +obj.lastName;
// const fullName2 = `${obj.firstName} ${obj.lastName}`;

// console.log(fullName1);
// console.log(fullName2);





const obj = {
    'firstName': 'Ajay',
    'lastName' : 'Singh',
    'age':20,
    'address': 'Delhi',
};

const x = prompt('Please tell the property to know');

console.log(obj[x]);


















