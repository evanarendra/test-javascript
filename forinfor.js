// 5 stars per row
var star = '';
for(var i = 0; i < 10; i++){
    for(var r = 0; r < 5; r++){
        star += '*';
    }
    star +='\n';
}
console.log(star);

//branching loop ++ 
var star = '';
for(var i = 0; i < 5; i++){
    for(var r = 0; r <= i; r++){
        star += '*';
    }
    star +='\n';
}
console.log(star);

//branching loop --

var star = '';
for(var i = 5; i > 0; i--){
    for(var r = 0; r < i; r++){
        star += '*';
    }
    star +='\n';
}
console.log(star);
