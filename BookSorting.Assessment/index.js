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
  // searchValue = searchInput.value.toLowerCase();
  console.log("book data", [bookData]);
  console.log(
    bookData.filter(
      (book) =>
        book.title.includes(searchValue) || book.author.includes(searchValue)
    )
  );
  console.log("test", searchValue);
  // for some reason it is able to read title values but not author values
  return bookData.filter(
    (book) =>
      book.title.includes(searchValue) || book.author.includes(searchValue)
  );
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
