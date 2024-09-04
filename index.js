const myLibrary = [
    {title: "To Kill A Mockingbird", author: "Harper Lee", pages: "281", read: "true"},
    {title: "1984", author: "George Orwell", pages: "328", read: "false"},
    {title: "Moby Dick", author: "Herman Melville", pages: "635", read: "true"},
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = Number(document.getElementById('pages').value);
    const read = document.querySelector('input[name="read"]:checked').value === 'true';
    const newBook = new Book(title, author, pages, read);
    if (!title || !author || isNaN(pages) || pages <= 0 || !read) {
        alert('Please fill in all fields correctly.');
        return;
    }
    
    myLibrary.push(newBook);
    console.log(myLibrary);
    document.getElementById('book-form').reset();
}

function displayBooks(library) {
library.forEach(function(book) {
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("Pages: " + book.pages);
    console.log("Read: " + book.read);
    console.log("----------");
})
};
displayBooks(myLibrary);
    
