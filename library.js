const myLibrary = [];

function Book(title, author, numOfPages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.read = read;
}

function addBookToLibrary(title, author, numOfPages, read) {
  //create a book from arguments 
  const book = new Book(title, author, numOfPages, read);
  //store new book object into array
  myLibrary.push(book);
}

 //DOM :create a table and place book in row
function displayBooks(){
  
  const tbody = document.querySelector("#tbody");

  //Clearing the table body to avoid duplicates
  tbody.innerHTML = "";

    for (const book of myLibrary){
      
      console.log(book.title + book.numOfPages);

        const tableRow = document.createElement("tr");
        tableRow.classList.add("td-row");

        const tableData1 = document.createElement("td");
        tableData1.classList.add("td");
        tableData1.innerHTML = book.title;

        const tableData2 = document.createElement("td");
        tableData2.classList.add("td");
        tableData2.innerHTML = book.author;

        const tableData3 = document.createElement("td");
        tableData3.classList.add("td");
        tableData3.innerHTML = book.numOfPages;

        const tableData4 = document.createElement("td");
        tableData4.classList.add("td");
        tableData4.innerHTML = book.read;

        const tableData5 = document.createElement("td");
        const removeBtn = document.createElement("button");
        removeBtn.innerHTML = "remove";
        removeBtn.addEventListener("click", () =>{
          removeBook(book);
          });
        tableData5.appendChild(removeBtn);


        tableRow.append(tableData1, tableData2, tableData3, tableData4, tableData5);
        tbody.appendChild(tableRow);

    }
    console.log(myLibrary);
}

function showForm() {
  const formView = document.querySelector("#formView");
  formView.style.display = "block";  
}

function createNewBook() {
//collect form inputs and save into variables and then call addBookToLibrary function.
const bookForm = document.querySelector("#bookForm");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numOfPages = parseInt(document.querySelector("#numOfPages").value, 10);
  let read = document.querySelector("#read");
  if(read.checked == true){
    read = true;
  }
    else{
      read = false;
    };
  
 
  addBookToLibrary(title, author, numOfPages, read);

  displayBooks();

  bookForm.reset();

});
}

function removeBook(book){
  const index = myLibrary.indexOf(book);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
  displayBooks();

}



addBookToLibrary("The Subtle Art", "Jay Hardy", 3, true);
addBookToLibrary("Tea Specialty", "Rosa E.", 5, false);
addBookToLibrary("Technologicl Path", "Rufus D.", 21, true);

createNewBook();
displayBooks();








// function createNewBook(e) {
//   //collect form inputs and save into variables and then call addBookToLibrary function.
//   const title = e.target.elements.title.value;
//   console.log(title);
//   addBookToLibrary(title);
//   return false;
// }