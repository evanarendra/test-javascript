// add Array

var days = ['Monday','Tuesday','Wednesday','Thursday'];
console.log(days[2]); //show array index 2 

var vechile = [];
vechile[0] = 'Bus';
vechile[1] = 'Car';
vechile[2] = 'Motorcycle';
vechile[5] = 'Boat';

console.log(arr1);

// delete Array

var employee = ['Steve','Jacob','Maddison','David'];
employee[1] = undefined;
console.log(employee);

// show value Array

var value = ['Steve','Jacob','Maddison','David'];

for(var i = 0; i < value.length; i++){
    console.log(value[i]);
}

//Method on Array

var value1 = ['Steve','Jacob','Maddison','David'];

console.log(value1.join()); 
//join to a string or the input is an array output is a string.

value1.push('Erikseen');
//adding last index 

value1.pop();
//delete last index

value1.unshift('James');
//adding first index

value1.shift();
//delete last index

/* splice, slice */
var value2 = ['Alejandro','Marco','Esteban','Recoba','Fransis'];

value2.splice(2, 0, 'Crist', 'Hernandez');
console.log(value2.join(' - '));
value2.splice(1,2, 'Ronaldinho', 'Ronaldo');
console.log(value2.join(' - '));
//splice (first idx, count delete, new element1, new element2)

value2.slice(1,3);
var arr2 = value2.slice(1,3);
console.log(arr2.join(' - '));
//slice (take first idx, end last idx)

/* foreach, map, sort */
var number = [1,3,2,7,5,6,9,8];

number.forEach(function(e, i) {
    console.log('row value of ' + (i+1) + ' is ' + e);
});
// foreach for looping

var number2 = number.map(function(e){
    return e * 2;
});
console.log(number2);
// map for return value of array

number.sort(function(a, b){
    return a-b;
});
console.log(number.join(' - '));
// sorting the value


