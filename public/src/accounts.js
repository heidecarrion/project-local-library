//return the account object when a particular id is passed in
//use .find to compare account id with passed in id
function findAccountById(accounts, id) {
  let returnAccount = accounts.find(account => account.id === id);
  return returnAccount;
}

//return the list of accounts ordered by last name
//use .sort() to run ternary (if/else) statement
function sortAccountsByLastName(accounts) {
  let returnAccount = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return returnAccount;
}

//return the number of 'borrow' records in an account
//Declare a counting variable set to zero
//Use for/in loop to iterate through keys in books array
//Set variable to .filter to check book IDs against account IDs for matches and count
//Increment number of borrowed books
//Return total borrow records
function numberOfBorrows(account, books) {
  let total = 0;
  for (let index in books) {
    const borrowed = books[index].borrows.filter(book => book.id === account.id).length;
    total += borrowed;
  }
  return total;
}

 

//Write a helper function for the booksInPossession function
//This function uses 2 for/in loops to iterate through books
//and authors
//Uses an if statement to compare the author
//IDs to the author IDs in books array 
//Returns the information from books array data set as specified 
function addAuthorToBook(books, authors) {
  for (let book in books) {
    for (let writer in authors) {
      if (authors[writer].id === books[book].authorId) {
        books[book].author = authors[writer];
      }
    }
  }
  return books;
}

//Returns array of all of the books taken out by a passed in account with the author embedded
//Declare variables for account.id and declare an empty array
//Declare a variable to call the helper function above to embed the authors
//Use .forEach to go through update the books with the authors
//Use .forEach within the .forEach to go through all of the borrows
//Use if statement to set the condition that if a book is loaned according to ID
//and has not been returned the checked out book should be pushed to array
//Return the array
function booksInPossession(account, books, authors) {
  const accntID = account.id;
  const checked = [];
  let updateBooks = addAuthorToBook(books, authors);
  updateBooks.forEach((book) => {
    const loans = book.borrows
    loans.forEach((loan) => {
      if (loan.id.includes(accntID) && loan.returned === false) {
        checked.push(book)
      }
    })
  })
  return checked;
}
 


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
