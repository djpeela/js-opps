function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getAll
Book.prototype.getAll = function() {
    return `${this.title} was written by ${this.author} in ${this.month},${this.year}`;
}


// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Magazine intanitate
const mag1 = new Magazine('Bubu', 'Dudu', '2021', 'Jan');

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getAll());
