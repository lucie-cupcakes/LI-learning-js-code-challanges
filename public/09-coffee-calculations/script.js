// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// ------- /

class Person {
    constructor(name) {
        this.name = name;
        this.numOfCoffeeOrdered = 0;
    }

    orderCoffee(amount = 1) {
        console.log(`${this.name} just ordered ${amount} coffee cup(s)`);
        this.numOfCoffeeOrdered = this.numOfCoffeeOrdered + amount;
    }
}

function calculateTotalBill(trip) {
    const coffeePrice = 1.25;
    const totalAmountOfCoffeeOrdered = trip.map(person => person.numOfCoffeeOrdered).reduce( (previousNumber, currentNumber) => {
        return previousNumber + currentNumber;
    }, 0);

    console.log('debug', {totalAmountOfCoffeeOrdered});
    return `The total bill is $${totalAmountOfCoffeeOrdered * coffeePrice}`
}

const trip = [new Person("Lucie"), new Person("Amanda"), new Person("John")];

console.log('trip', trip);

trip.forEach(person => person.orderCoffee(getRandomInt(1, 10))); //each person will order a random amount of coffee. between 1 to 10.

console.log('trip', trip);

console.log(calculateTotalBill(trip));