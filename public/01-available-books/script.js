class Book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    }

    sell(numSold = 1) {
        if (this.numCopies >= numSold) {
            this.numCopies = this.numCopies - numSold;
            console.log(`sold ${numSold} books!`);
        } else {
            throw 'cannot sell more than current stock!';
        }
    }

    get availability() {
        console.log(`debug`, {numCopies: this.numCopies});
        if (this.numCopies === 0) {
            return 'out of stock';
        } else if (this.numCopies < 10 ) {
            return 'low stock';
        } else {
            return 'in stock';
        }
    }

    restock(numCopies = 5) {
        this.numCopies = this.numCopies + numCopies;
        console.log(`restocked ${numCopies} books!`);
    }
}

const book = new Book('How to Win Friends and Influence People', 'Dale Carnegie', '1-4391-6734-6', 15);

console.log(`availability = ${book.availability}`);
book.sell();
console.log(`availability = ${book.availability}`);
book.sell(5);
console.log(`availability = ${book.availability}`);
book.sell(9);
console.log(`availability = ${book.availability}`);
book.restock();
console.log(`availability = ${book.availability}`);