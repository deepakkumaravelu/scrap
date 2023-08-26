let library = [];

function addBook(title, author, yearPublished, readStatus) {
    let book1 = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        readStatus: readStatus
    };
    library.push(book1);
}

function addBookToFront(title, author, yearPublished, readStatus) {
    let book2 = {
        title: title,
        author: author,
        yearPublished: yearPublished,
        readStatus: readStatus
    };
    library.unshift(book2);
}

function getAllTitles() {
    // Assuming you have an array named 'library' containing book objects
    const titles = library.map(lib => lib.title);
    const out = document.getElementById("bookO");
    out.innerHTML = titles.join("<br>");
}

function addB() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var yearPublished = document.getElementById("yearPublished").value;
    var readStatus = document.getElementById("readStatus").value;
    addBook(title, author, yearPublished, readStatus);
}

function addBF() {
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var yearPublished = document.getElementById("yearPublished").value;
    var readStatus = document.getElementById("readStatus").value;
    addBookToFront(title, author, yearPublished, readStatus);
}

//console.log(getAllTitles());
function removeFirstBook(){
    library.shift();
}
function removeLastBook(){
    library.pop();
}
function getBooksByAuthor(author){
    var auth=library.filter(book=>book.author==author);
    return auth;
        
}

// function getBooksByAuthor(auth) {
//     const filteredBooks = library.filter(
//       book => book.author==auth
//     );
//     return filteredBooks;
//  }
// let auth=getBooksByAuthor("lokesh");
// // for(var i=0;i<auth.length;i++){
// //     console.log(auth[i]);
// // }
// function getTotalBooksPublishedBefore(year){
//     const numOfBooks=library.filter(book=>book.yearPublished<year);
//     return numOfBooks;
// }
// let tBooksbyyear=getTotalBooksPublishedBefore(2024);
// // for(var i=0;i<tBooksbyyear.length;i++){
// //     console.log(tBooksbyyear[i]);
// // }
// console.log(tBooksbyyear.length);
// function removeBookByTitle(title){
//     const removeBooks=library.findIndex(book=>book.title==title);
//     if(removeBooks!==-1){
//         library.splice(removeBooks,1);
//     }
// }
// removeBookByTitle("leo");
// console.log(getAllTitles());
// function BooksByRaedStatus(status){
//     const bookStatus=library.filter(book=>book.readStatus===status);
//     return bookStatus;
// }
// let bookStatus1=BooksByRaedStatus(true);
// // for(var i=0;i<bookStatus1.length;i++){
// //     console.log(bookStatus1[i]);
// // }
// function getSubLibrary(start,end){
//     let port=library.slice(start,end);
//     return port;
// }
// let portion=getSubLibrary(1,3);
// for(var i=0;i<portion.length;i++){
//     console.log(portion[i]);
// }
// let Book=[{
//     title:"",
//     author:"",
//     yearPublished:"",
//     readStatus:"",
//     getSummary:function(){
//         return  " Title:"+this.title+"\nAuthor: "+this.author+"\nYear published: "+this.yearPublished+"\nRead status:"+this.readStatus;
//     },
//     toggleReadStatus:function(){
//         this.readStatus=!this.readStatus;
//     }
// }]