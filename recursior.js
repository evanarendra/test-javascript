//creating a function that keeps calling itself

function showNumber(n){
    if (n === 0) return; //base case
    console.log(n);
    return showNumber(n-1);
}

showNumber(10);

// faktorial

function faktorial(n){
    if (n === o) return 1;
    return n * faktorial(n-1);
}