//create a function to calculate the volume of cube 
function sumVol(a, b){
    var volA;
    var volB;
    var total;

    volA = a * a * a;
    volB = b * b * b;

    total = volA + volB;

    return total;
}

console.log(sumVol(5, 3));

// refactor the code

function sumVol1(a, b){
    return a * a * a + b * b * b;
}

console.log(sumVol1(5, 3));
