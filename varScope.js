//window or global scope
//window.#variable to make global var
var a = 1;

function test(a){
    console.log(a);
}

test(a);    
console.log(a);

/* variable a on function is variable local */