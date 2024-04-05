// function sum(a, b){
//     return a+b;
// }

// function print(x){
//     console.log('     **** ',x,' ****       ');
// }

// const ans = sum(3,4);
// print(ans);




function sum(a, b, fun){
    const ans = a+b;
    fun(ans);
}

function print(x){
    console.log('     *** ',x,' ***       ');
}

sum(3,4, print);