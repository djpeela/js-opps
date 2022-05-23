class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getDetails() {
        return `${this.title} was written by ${this.author} in ${this.month},${this.year}`;
    } 

    getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
    }
};

// Magazine Subclass
class Magazine extends Book{
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
};

// Instantiate 
const mag1 = new Magazine('Bubu', 'Dudu', 2021, 'Jan');
console.log(mag1.getAge());

