const formPop = document.getElementById("#new");
const modal = document.getElementById("#modal");
const form = document.querySelector("#form");
const bookStorage = document.querySelector(".books");
let formStatus = "close";
let books = []; // let insted of const

function formOpen() {
  if (formStatus === "close") {
    document.getElementById("popUpForm").style.display = "block";
    formStatus = "open";
  } else if (formStatus === "open") {
    document.getElementById("popUpForm").style.display = "none";
    formStatus = "close";
  }
  form.reset();
}

function formClose() {
  document.getElementById("popUpForm").style.display = "none";
  formStatus = "close";
}

class BookInfo{
  constructor(name, author, pages, status){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
  } 
}


function addBook(i) {
  let bookNode = document.createElement("div");
  bookNode.classList.add("book");

  const title = document.getElementById("title").value;
  let titleNode = document.createElement("p");
  titleNode.innerHTML = `Title: ${title}`;

  const author = document.getElementById("author").value;
  let authorNode = document.createElement("p");
  authorNode.innerHTML = `Author: ${author}`;

  const pages = document.getElementById("pages").value;
  let pageNode = document.createElement("p");
  pageNode.innerHTML = `Pages: ${pages}`;

  const status = document.getElementById("status");
  let statusNode = document.createElement("p");
  statusNode.innerHTML = status.options[status.selectedIndex].text;

  const book = new BookInfo(title, author, pages, status);
  books.push(book);
  bookNode.appendChild(titleNode);
  bookNode.appendChild(authorNode);
  bookNode.appendChild(pageNode);
  bookNode.appendChild(statusNode);
  bookStorage.appendChild(bookNode);
  formOpen();
  form.reset();
}

function getBooks() {
  books.forEach((book) => {
    let bookNode = document.createElement("div");
    bookNode.classList.add("book");

    // const title = document.getElementById("title").value;
    let titleNode = document.createElement("p");
    titleNode.innerHTML = `Title: ${book.title}`;

    // const author = document.getElementById("author").value;
    let authorNode = document.createElement("p");
    authorNode.innerHTML = `Author: ${book.author}`;

    // const pages = document.getElementById("pages").value;
    let pageNode = document.createElement("p");
    pageNode.innerHTML = `Pages: ${book.pages}`;

    let status = document.getElementById("status");
    let statusNode = document.createElement("p");
    statusNode.innerHTML = status.options[status.selectedIndex].text;

    bookNode.appendChild(titleNode);
    bookNode.appendChild(authorNode);
    bookNode.appendChild(pageNode);
    bookNode.appendChild(statusNode);
    bookStorage.appendChild(bookNode);
  });
}

document.getElementById("new").addEventListener("click", formOpen);
document.getElementById("modal").addEventListener("click", formClose);
window.addEventListener("load", getBooks);
form.addEventListener("submit", (e, i) => {
  e.preventDefault();
  addBook(i);
});
