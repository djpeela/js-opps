class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 

    getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }
};

// Instantiate Object
const book1 = new Book('Bubu', 'Dudu', 1824);
// console.log(book1.getDetails());
// console.log(book1.getAge());

// console.log(book1);
// book1.revise('0494');
// console.log(book1);

console.log(Book.topBookStore());
