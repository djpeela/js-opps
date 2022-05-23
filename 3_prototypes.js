function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getAll
Book.prototype.getAll = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// getAge
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}



const book1 = new Book('Dj', 'peela', 1994);
const book2 = new Book('Dudu', 'chinnodu', 1824);
console.log(book1);
console.log(book2);

console.log(book1);

book1.revise('2004');
console.log(book1.getAll()); 
console.log(book1.getAge());
