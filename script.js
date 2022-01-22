
// let User = function(name, age, canwalk) {
//     this.name = name;
//     this.age = age;
//     this.canWalk = canwalk;
// }

// let userAlex = new User('Alex', 40, true);
// let userMike = new User('Mike', 35, true);
// let userBob = new User('Bob', 25, false);

// console.log(userAlex)
// console.log(userMike)
// console.log(userBob)

// let Animal = function(name, walk) {
//     this.name = name;
//     this.canWalk = walk;
// }

// let cat = new Animal('cat', true),
//     dog = new Animal('dog', true);

// console.log(cat)
// console.log(dog)

// let Calc = function() {
//     this.get = function() {
//         // this.a = +prompt('Input number a:')
//         // this.b = +prompt('Input number b:')
//         // this.oper = prompt('Input operation: +, -, *, /')

//         this.operation();
//     }
//     this.operation = function() {
//         switch(this.oper) {
//             case '+':
//             this.result = this.a + this.b;
//             break;
//             case '-':
//             this.result = this.a - this.b;
//             break;
//             case '*':
//             this.result = this.a * this.b;
//             break;
//             case '/':
//             this.result = this.a / this.b;
//             break;
//             default: this.result = 0;
//         }

//         this.show();
//     } 
//     this.show = function() {
//         // alert(this.a + this.oper + this.b + '=' + this.result)
//     }
// }

// let calc = new Calc();

// calc.get();

// let Car = function(brand, type, maxSpeed, power, isEngineOn, weight) {
//     this.brand = brand;
//     this.type = type;
//     this.maxSpeed = maxSpeed;
//     this.power = power;
//     this.isEngineOn = isEngineOn;
//     this.weight = weight;
//     this.getPowerPerWeight = function() {
//         let PowerPerWeight = this.power / this.weight;
//         return PowerPerWeight
//     }
// }

// let bus = new Car('MAZ', 'Bus', 60, 400, true, 5000);
// let taxi = new Car('Skoda', 'Car', 150, 90, false, 1000);
// let ambulance = new Car('Renault', 'Car', 150, 100, true, 2000);

// console.log(bus, taxi, ambulance)

// // console.log(.getPowerPerWeight())

// console.log(taxi.getPowerPerWeight())

// function anagrams(word, words) {
    
// }

// console.log(anagrams())
// function anagrams(word, words) {

//     const getChar = word => word.split('').map((value) => value.charCodeAt())
    
//     const getCharSum = (arr, index = 0, sum = 0) => index < arr.length ? (sum += arr[index], index++, getCharSum(arr,index,sum)) : sum
    
//     // console.log(getChar(word))
//     word = getChar(word)
//     let newWord = getCharSum(word);
    
    
//     // const getArr = arr => arr.map((value) => getChar(value)).map((value) => getCharSum(value))
//     // let newArr = getArr(words)
//     // console.log(getArr(words))
    
//     const filt = (word, arr) => arr.filter((value) => {
//         let newarr = getChar(value)
//         let newSum = getCharSum(newarr)
//         // console.log(newarr, newSum, value, word)
//         if (newSum === word) {
//             return value
//         }
//     })
//     let result = filt(newWord, words)

//     // console.log(words)
    
//     return result
//     }

String.prototype.sort = function() {
    return this.split("").sort().join("");
};

function anagrams(word, words) {
    return words.filter(function(x) {
        return x.sort() === word.sort();
    });
}

    console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))

    let anagrams = (word, words) => words.filter(w => w.split('').sort().join('') === word.split('').sort().join(''));