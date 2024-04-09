const sum = function (a, b){
    console.log(a+b);
}
const mul = function (a, b){
    console.log(a*b);
}
// module.exports = {
//     sum: sum,
//     mul: mul,
// };
console.log('Module 1.....')
const name=  'Ajay';
module.exports = {
    sum,
    mul,
    'name': name,
    // name,
};
