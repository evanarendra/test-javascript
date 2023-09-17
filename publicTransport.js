function Bus(driver, route, cash, passanger){
    this.driver = driver;
    this.route = route;
    this.cash = cash;
    this.passanger = passanger;

    this.passangerIn = function(passangerName){
        this.passanger.push(passangerName);
        return this.passanger;
    }

    this.passangerOut = function(passangerName, paid){
        if (this.passanger.length === 0){
            alert('passanger still empty!');
            return false;
        }

        for(var i = 0; i < this.passanger.length; i++){
            if(this.passanger[i] === passangerName){
                this.passanger[i] = undefined;
                this.cash += paid;
                return this.passanger;
            }
        }
    }
}

var busOne = new Bus('John', ['Boulevard','El Paso'], 0, []);
var busTwo = new Bus('Shelby', ['Chihuahua','Juarez'], 0, []);