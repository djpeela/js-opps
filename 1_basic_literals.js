const s1 = 'Hello';
console.log(typeof s1);

const s2 = new String('Hello');
console.log(typeof s2);

console.log(window);
alert(1);

console.log(navigator.appVersion);

const book1 = {
   title: 'Dj',
   author: 'Peela',
   year: 1994,
   getSummery: function(){
       return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

const book2 = {
    title: 'dudu',
    author: 'chinnodu',
    year: 1824,
    getSummery: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
 }

// console.log(book1.getSummery());
console.log(Object.values(book1));
console.log(book2.getSummery());











