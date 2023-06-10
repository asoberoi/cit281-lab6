class Book {
    constructor(title, author, pubDate) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
    }
  }
  
  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    
    get count() {
      return this._books.length;
    }

    
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate };
        this._books.push(newBook);
      }
    }
    
    listBooks() {
      for (const book of this._books) {
        const { title, author, pubDate } = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}`);
      }
    }
  }
  
  // Create a book
  const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018");
  
  // Create a library
  const lib = new Library("Best Sellers");
  
  console.log(atomicHabits.title);  // Output: Atomic Habits
  console.log(lib.count);  // Output: 0 (because the library is empty)
  
  lib.addBook(atomicHabits);  // Add the book to the library
  
  console.log(lib.count);
  