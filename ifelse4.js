//If else
// var sumBus = 10;
// var operatedBus = 6;
// var noBus = 1;

// for(var noBus; noBus <= sumBus; noBus++){
//     if(noBus <= operatedBus && noBus !== 2){
//          console.log('Public Transport No. ' + noBus + ' operates well');
//         }else if(noBus === 8 || noBus === 2){
//             console.log('Public Transport No. ' + noBus + ' is on going');
//         }else{
//             console.log('Public Transport No. ' + noBus + ' does not operates well');
//         }
// }


//value from prompt is String
var number = prompt('masukkan angka : ');

if(number === 1){
    alert('User enters number 1');
}
else if(number === 2){
    alert('User enters number 2');
}
else if(number === 3){
    alert('User enters number 3');
}else{
    alert('User enters wrong number');
}

//dev can change condition from 1 being '1' (String value)
//or change operator from === being ==
//or change syntax on prompt being ParseInt(prompt(''));

