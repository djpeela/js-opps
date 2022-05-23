// Object Of Protos

const bookProtos = {
  getDetails: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
  }
};

// create object

// const book1 = Object.create(bookProtos);
// book1.title = 'Jerry';
// book1.author = 'Tom';
// book1.year = 2021;

const book1 = Object.create(bookProtos, {
    title : { value : 'Jerry'},
    author : { value : 'Jerry'},
    year : { value : 2021},
});

console.log(book1.getDetails());
console.log(book1.getAge());