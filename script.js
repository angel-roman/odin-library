const MyLibrary = [];
const bookList = document.getElementById("library");
const inputName = document.getElementById("name");
const inputAuthor = document.getElementById("author");
const checkboxRead = document.getElementById("chk");
const bookForm = document.getElementById("addBook");

class Book {
    constructor(name, author, read) {
        this.name = name;
        this.author = author;
        this.read = read;
    }
}

function removeBook(index) {
    MyLibrary.splice(index, 1);
    showLibrary();
}

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true);
MyLibrary.push(book1);

function clearForm() {
    inputName.value = "";
    inputAuthor.value = "";
    checkboxRead.checked = false;
    bookForm.style.display = "none";
}

function addBookToLibrary(book) {
    MyLibrary.push(new Book(book.name, book.author, book.read));
    showLibrary();
}

document.getElementById("addNav").addEventListener("click", function () {
    bookForm.style.display = bookForm.style.display === "grid" ? "none" : "grid";
});

document.getElementById("addBtn").addEventListener("click", function () {
    const name = inputName.value;
    const author = inputAuthor.value;
    const read = checkboxRead.checked;
    addBookToLibrary(new Book(name, author, read));
    clearForm();
});

function showLibrary() {
    bookList.innerHTML = ""; // Use innerHTML to clear the list

    MyLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const nameP = document.createElement("p");
        nameP.classList.add("p-name");
        nameP.textContent = book.name;

        const authorP = document.createElement("p");
        authorP.classList.add("p-author");
        authorP.textContent = book.author;

        const readSpan = document.createElement("span");
        readSpan.classList.add("sp-read");
        readSpan.textContent = "Read?";

        const readCheckbox = document.createElement("input");
        readCheckbox.type = 'checkbox';
        readCheckbox.classList.add("in-yes-no");
        readCheckbox.checked = book.read;
        readCheckbox.addEventListener("change", function () {
            book.read = readCheckbox.checked;
            
        
        });

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.classList.add("btnRemove");
        removeBtn.addEventListener("click", function () {
            removeBook(index);
        });
        const bookShade = document.createElement("div");

        bookDiv.appendChild(nameP);
        bookDiv.appendChild(authorP);
        bookDiv.appendChild(readSpan);
        bookDiv.appendChild(readCheckbox);
        bookDiv.appendChild(removeBtn);
        bookDiv.appendChild(bookShade);
        bookList.appendChild(bookDiv);

    });
}

showLibrary();




/* const MyLibrary = [];
const bookList = document.getElementById("library");
const inputName = document.getElementById("name");
const inputAuthor = document.getElementById("author");
const checkboxRead = document.getElementById("chk");
const bookForm = document.getElementById("addBook");

class Book {
    constructor(name, author, read) {
        this.name = name;
        this.author = author;
        this.read = read;
    }
}

function removeBook(index){
    MyLibrary.splice(index, 1);
}

const book1 = new Book("Harry Potter and the Sorcerer's Stone", "J. K. Rowling", true);
MyLibrary.push(book1);


function clearForm(){
    inputName.value = "";
    inputAuthor.value = "";
    checkboxRead.checked = false;
    bookForm.style.display = "none";
}

function addBookToLibrary(book){
    this.book = new Book(book.name, book.author, book.read);
    MyLibrary.push(this.book);
}

document.getElementById("addNav").addEventListener("click", function(){
    let show = bookForm.style.display;
    show == "grid" ? bookForm.style.display = "none" : bookForm.style.display = "grid";
});

document.getElementById("addBtn").addEventListener("click", function(){
    let name = inputName.value;
    let author = inputAuthor.value;
    let read = checkboxRead.checked;
    let book = new Book(name, author, read);
    addBookToLibrary(book);
    showLibrary();
    clearForm();
});

function showLibrary(){
    bookList.innerText = "";
    MyLibrary.forEach(text => {

    let div1 = document.createElement("div");
    div1.classList.add("book");
    div1.value = text.index;

    let p1 = document.createElement("p");
    p1.classList.add("p-name");
    p1.textContent = text.name;

    let p2 = document.createElement("p");
    p2.classList.add("p-author");
    p2.textContent = text.author;

    let sp = document.createElement("span");
    sp.classList.add("sp-read");
    sp.textContent = "Read?";

    let chk = document.createElement("input");
    chk.type = 'checkbox';
    chk.value = text.index;
    chk.classList.add("in-yes-no");
    console.log(text.read);
    if(text.read == true){
        chk.checked = true;
    }
    chk.addEventListener("change", function(){
        text.read = chk.checked ? true : false;
    })
    
    let btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.classList.add("btnRemove");
    btn.addEventListener("click", function(){
        removeBook(div1.value);
        div1.remove();
    })
    let div2 = document.createElement("div");
    div1.appendChild(div2);
    
    div1.appendChild(p1);
    div1.appendChild(p2);
    div1.appendChild(sp);
    div1.appendChild(chk);
    div1.appendChild(btn);
    div1.appendChild(div2);
    bookList.appendChild(div1);
    })
}

showLibrary(); */

