//returns the author object when and id is passed in
//use .find to iterate through and compare author id 
//with passed in id
function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}

//returns the book when ID is passed in 
//use .find to iterate through books and compare with
//author object ID
function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

//use .filter to iterate throught books in order
//to check their status and return an array with a list of
//borrowed books and returned books
//return array should have two arguments
function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter(book => book.borrows[0].returned === false);
  let returnedBooks = books.filter(book => book.borrows[0].returned === true);
  return [borrowedBooks, returnedBooks];
}

//returns array for a book of all borrowers with their account information
//and their returns status
//declare variable as borrows object in books array
//declare empty array 
//use .find to iterate through accounts and compare IDs
//define the new object at object variable
//push the new object into the array
//use .splice and specify the 10 item limit
function getBorrowersForBook(book, accounts) {
  let checkout = book.borrows;
  let results = [];
  for(let item in checkout) {
    const accountInfo = accounts.find(account => account.id === checkout[item].id);
    const object = {"id" : checkout[item].id, ...checkout[item], ...accountInfo};
    results.push(object);
  }
  return results.splice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
