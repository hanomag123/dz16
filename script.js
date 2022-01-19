
let User = function(name, age, canwalk) {
    this.name = name;
    this.age = age;
    this.canWalk = canwalk;
}

let userAlex = new User('Alex', 40, true);
let userMike = new User('Mike', 35, true);
let userBob = new User('Bob', 25, false);

console.log(userAlex)
console.log(userMike)
console.log(userBob)

let Animal = function(name, walk) {
    this.name = name;
    this.canWalk = walk;
}

let cat = new Animal('cat', true),
    dog = new Animal('dog', true);

console.log(cat)
console.log(dog)

let Calc = function() {
    this.get = function() {
        // this.a = +prompt('Input number a:')
        // this.b = +prompt('Input number b:')
        // this.oper = prompt('Input operation: +, -, *, /')

        this.operation();
    }
    this.operation = function() {
        switch(this.oper) {
            case '+':
            this.result = this.a + this.b;
            break;
            case '-':
            this.result = this.a - this.b;
            break;
            case '*':
            this.result = this.a * this.b;
            break;
            case '/':
            this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }

        this.show();
    } 
    this.show = function() {
        // alert(this.a + this.oper + this.b + '=' + this.result)
    }
}

let calc = new Calc();

calc.get();

let Car = function(brand, type, maxSpeed, power, isEngineOn, weight) {
    this.brand = brand;
    this.type = type;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.isEngineOn = isEngineOn;
    this.weight = weight;
    this.getPowerPerWeight = function() {
        let PowerPerWeight = this.power / this.weight;
        return PowerPerWeight
    }
}

let bus = new Car('MAZ', 'Bus', 60, 400, true, 5000);
let taxi = new Car('Skoda', 'Car', 150, 90, false, 1000);
let ambulance = new Car('Renault', 'Car', 150, 100, true, 2000);

console.log(bus, taxi, ambulance)

// console.log(.getPowerPerWeight())

console.log(taxi.getPowerPerWeight())
