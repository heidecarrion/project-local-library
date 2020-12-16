//Counts the total number of books in books array
//Returns zero if arry is empty
function totalBooksCount(books) {
  return books.length;
}

//Returns the total number of accounts in accounts array
//Returns zero if array is empty
function totalAccountsCount(accounts) {
  return accounts.length;
}

//Returns the total number of books that are currently checked out
//Declare variable to store the .reduce results
//Use .reduce to go through the books array and accumulate all books
//that meet if condition of not being returned
//Return the smaller array
//Return the number of items in the array
function booksBorrowedCount(books) {
  const borrowedBooks = books.reduce((acc, book) => {
    if(!(book.borrows[0].returned)) {
      acc.push(book);
    }
    return acc;
  }, []);
  return borrowedBooks.length;
}

//Returns ordered list of most common genres
//Declare variable to .map to go through and call the book genres
//Make a new array from the genres called
//Use .reduce() to run through and hold each genre
//Declare a new object 
//Use if statement to make condition that book genres must match accumulated genres
//Increment the count of genres and return the count
//Push the object into the new array
//Use .sort to sort the genres from most popular to least popular by number
//List is limited to top five: Use .splice
  function mostCommonGenres(books) {
    let genres = books.map((book) => book.genre)
    let genresList = Array.from(new Set(genres));
    let object = genresList.reduce((acc, genre1) => {
     let newObject = {name: genre1, count: books.reduce((count, book) => {
       if (book.genre === genre1) count++;
       return count;
    }, 0)};
    
    acc.push(newObject);
    return acc;
  }, []);
  let sorted = object.sort((first, second) => (second.count - first.count));
  return sorted.splice(0, 5);
}
 
//Helper function for mostPopularBooks
//Declare empty array
//Use for loop to iterate through books array
//Declare empty object
//Declare variables to neaten books[i] results
//Push the array
//Sort the books according to popularity
//Use .slice to return only the top five
function popularBooks(books) {
  let array = [] 
  for (let i=0; i < books.length; i++){ 
  let novels = {} 
  novels.name = books[i].title 
  novels.count = books[i].borrows.length 
  array.push(novels) } 
  const result = array.sort((book1, book2)=> book1.count < book2.count ? 1 : -1) 
  return result.slice(0, 5)
}

//Declare variable to invoke helper function
//Return the results of helper function
function mostPopularBooks(books) {
  let book = popularBooks(books);
  return book;
}

//Returns array of ordered list of top five most popular authors
//Declare empty array
//Use for loop to iterate through array of authors
//Declare empty object
//Use template literal to declare full names of writers
//Declare count variable and set to zero
//Use for loop within for loop to iterate through the books array
//Use if statement for conditon that the IDs in books matches the IDs of the authors
//Count the amount of times books were borrowed if condition is satisfied
//Push array of authors
//Sort through the array to order the authors by popularity
//Use .slice to return only top five 
function mostPopularAuthors(books, authors) {
  let array = [];
  for (let i = 0; i < authors.length; i++) {
    let writer = {};
    writer.name = `${authors[i].name.first} ${authors[i].name.last}`
    writer.count = 0
    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        writer.count += books[j].borrows.length
      }
    }
    array.push(writer)
  }
  const final = array.sort((authorA, authorB)=> authorA.count < authorB.count ? 1 : -1)
  return final.slice(0, 5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
