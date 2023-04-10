// --------------------------
//#GRADING NOTES
// --------------------------
// 1. Bookshelf is refactored so that map is used to generate DOM elements from the array of books.
//       I see you did this right away :) - SLL
// 2. Each book has a "Favorite" button that will add the selected book to a maintained list of the user's favorite books.
// This list should be maintained by Bookshelf.
//       So, you do have a favorite button and it adds each book to the favorites list in order. However, it isn't adding
//        the book that is clicked. So, if I click "The Beasts of Tarzan" more than once, it is actually just adding the
//        next book in the list instead of only adding the specific book clicked. This is where classes come in handy.
//        You could use the "this" keyword to make sure the favorite property is tied to that specific book instance. - SLL
// 3. The Book class contains a way to keep track of whether or not a Book instance is a Favorite.
//        You do have an array that is holding the list of favorites. I can see in the devtools when I click, that array
//        is holding each book added. - SLL
// 4. The UI contains elements that indicate whether or not a book is a Favorite.
//        When a book is clicked (meaning the heart button), I don't see on the book that it is a favorite after clicking.
//        You could create a boolean and use that in your eventListener to toggle the color of the button to indicate that
//        book is now a favorite. -SLL
// 5. You use reduce to count the total number of favorite books, which is indicated by a DOM element.
//        I see you properly used reduce and your favorite count changes with each click! -SLL
// 6. The UI contains a "Search" text input and a "Search" button. When the user clicks the button, only books with either
// an author, title, or topic that matches the user's query should remain visible on the page. This is done using filter.
//        I went ahead and changed your search function a bit. If you look in the console of the devtools, you will see a proper
//        array of books based on the search function below. You aren't seeing it in the DOM because of some of the class issues
//        I referenced above. I can explain more about that with you if you want. Also, note that I only did it with title for now
//        I always start getting one thing to work well. I finish out the project and if I want to try new stuff. I do it afterwards
//        That way, I will get things functioning and turned in. Then, if I get more stuff working, I can submit a newer version.-SLL
// 7. The UI contains a "Sort by" drop-down menu that contains the following options. There should also be a way to toggle whether the sort is ascending or descending. This is done using sort.
// Sort alphabetically (A-Z) by title or author.
// Sort by the number of topics.
//        I would have liked to see just a simple sorting A-Z and Z-A with only titles just to get the sorting to work. Right now,
//        it would have been better to use the localeCompare method that was mentioned during lecture just to get the titles to
//        sort.
// Overall Notes: I really appreciate that you are looking for new ways to do things without the Classes or Constructors however,
// I think until you are more comfortable with the concepts, it would be good to keep with what we have been doing. That way, you
// are just building on top of what you have already learned. There will be times to try new things in the future during the cohort
// so moving forward to the milestone portion of this project, I would write it as either Classes or Constructors. Whichever you
// are most familiar with. -SLL
// --------------------------
//#end GRADING NOTES

const favoriteBooks = [];
const searchInput = document.querySelector(".search");

const bookElements = bookData.map((book) => {
  // creating an li element for each book and changing the inner html to match the constructors
  const liElement = document.createElement("li");
  liElement.innerHTML = `Title: <span class="Title">${book.title}</span> <br> Author: <span class="Author">${book.author}</span> <br> Language: ${book.language} <br> Subject: ${book.subject} <br>`;

  const favoriteBtn = document.createElement("button");
  favoriteBtn.textContent = "💗";
  favoriteBtn.addEventListener("click", function () {
    const index = bookData.indexOf(book);
    const favoritedBook = bookData.splice(index, 1)[0];
    favoriteBooks.push(favoritedBook);
    displayFavorites();
    console.log(favoriteBooks);
  });

  liElement.append(favoriteBtn);
  return liElement;
});

function displayFavorites() {
  const numberOfFavorites = favoriteBooks.reduce((total, book) => total + 1, 0);
  const favoriteTag = document.getElementById("numfavs");
  favoriteTag.textContent = numberOfFavorites;
}

// select my ul element from html and using forEach to execute the bookElements function for each book
const ulElement = document.querySelector("#book-list");
bookElements.forEach((bookElement) => {
  ulElement.appendChild(bookElement);
});

// search input using filter() here

function bookSearch(searchValue) {
  //searchValue = searchInput.value.toLowerCase();
  console.log("book data", [bookData]);

  // bookData.filter(
  //   (book) =>
  //     book.title.includes(searchValue) || book.author.includes(searchValue)
  // );

  console.log("test", searchValue);
  // for some reason it is able to read title values but not author values
  const filteredBooks = bookData.filter(
    (book) => book.title.toLowerCase().includes(searchValue.toLowerCase())
    //book.title.includes(searchValue) || book.author.includes(searchValue)
  );
  console.log(filteredBooks);
  return filteredBooks;
}

const searchBtn = document.getElementById("search-button");
searchBtn.addEventListener("click", function () {
  searchValue = searchInput.value.toLowerCase();

  bookSearch(searchInput.value);
});

// book sorting :( fail lol next week i want to rework this completely to do it the right way with classes it was a mistake to try and go the "simpler" route which in turn made things more difficult for me oh well

const sortMenu = document.getElementById("sorting");
sortMenu.addEventListener("click", function () {
  bookData.sort((a, b) => {
    return a.title[0] > b.title[0];
  });
  console.log(bookData);
});
