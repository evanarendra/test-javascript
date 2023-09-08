// Parameter & Arguments

function add(a, b){
    return a + b;
}

function times(a, b){
    return a * b;
}

var result = times(add(3, 5), add(3,2));

console.log(result);

// ignore the argument
var result1 = add(4, 5, 7);
console.log(result1);

//  undefined parameter

function add2(a, b, c){
    return a + b;
}
var result2 = add2(5, 4);

// using arguments with array 

function sum(){

    var resultt = 0;
    for(i = 0; i < arguments.length; i++){
        resultt += arguments[i];
    }
    return resultt;
}

var tutor = sum(1,2,3);

console.log(tutor);