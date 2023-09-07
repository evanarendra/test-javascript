var ask = true;

while(ask){
    // catch user option
    var option = prompt('pilih : elephant, ant, person');

    // catch com option & random math js 
    var comp = Math.random();

    if( comp < 0.34){
        comp = 'elephant';
    }else if (comp => 0.34 && comp < 0.67 ){
        comp = 'ant';
    }else{
        comp = 'person';
   }

    var result = '';

    // make rules
    if(option == comp){
        result = 'Draw!';
    }else if (option == 'elephant'){
        // if(comp == 'person'){
        //     result = 'Won';
        // }else{
        //     result = 'Lose';
        // }
        result = (comp == 'person') ? 'Won' : 'Lose';
    }else if (option == 'ant'){
        // if(comp == 'person'){
        //     result = 'Lose';
        // }else{
        //     result = 'Won';
        // }
        result = (comp == 'person') ? 'Lose' : 'Won';
    }else if (option == 'person'){
        result = (comp == 'ant') ? 'Won' : 'Lose';
    }else{
        result = 'Wrong input';
    }

    //show the alert
    alert('Player select : ' + option + ' & Computer select : ' + comp + '\nThe Result is You ' + result);

    ask = confirm('again?');
}

alert('Thanks!');
