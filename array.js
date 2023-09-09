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
