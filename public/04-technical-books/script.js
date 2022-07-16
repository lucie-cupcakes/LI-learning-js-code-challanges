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

class TechnicalBook extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies)
        this.edition = edition;
    }

    getEdition() {
        return `The current version of this book is ${this.edition}`;
    }
}

const technicalBook = new TechnicalBook('The C Programming Language', 'Dennis M. Ritchie', '0131103628', 15, "second edition");

console.log('technicalBook', technicalBook);

console.log('technicalBook edition', technicalBook.getEdition());

console.log(`availability = ${technicalBook.availability}`);
technicalBook.sell();
console.log(`availability = ${technicalBook.availability}`);
technicalBook.sell(5);
console.log(`availability = ${technicalBook.availability}`);
technicalBook.sell(9);
console.log(`availability = ${technicalBook.availability}`);
technicalBook.restock();
console.log(`availability = ${technicalBook.availability}`);
technicalBook.restock(10);
console.log(`availability = ${technicalBook.availability}`);