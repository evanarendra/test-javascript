var passanger = ['Smith', undefined, 'John'];

var addPassanger = function(passangerName, passanger){
    if (passanger.length == 0){
        passanger.push(passangerName);
        return passanger;
    } else{
        for( var i = 0; i < passanger.length; i++){
            if(passanger[i] == undefined){
                passanger[i] = passangerName;
                return passanger;
            }else if(passanger[i] == passangerName){
                console.log(passangerName + ' passanger name already on bus.');
                return passanger;
            }
            else if(i == passanger.length - 1){
                passanger.push(passangerName);
                return passanger;
            }
        }
    }
};