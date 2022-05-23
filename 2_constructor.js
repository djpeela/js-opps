function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.getAll = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

const book1 = new Book('Dj', 'peela', '1994');
const book2 = new Book('Dudu', 'chinnodu', 1824);
console.log(book1.getAll());
console.log(book2.getAll());

