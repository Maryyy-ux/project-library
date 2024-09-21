/*Here we have created two different arrays that you can work with if you want.
If you choose to create your own arrays with elements, just make sure that some
of the properties make sense to filter on, and some to sort on.*/
const books = [
  {
    title: 'SPQR: A history of ancient Rome',
    author: 'Mary Beard',
    year: 2015,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'In SPQR, her wonderful concise history, Mary Beard unpacks the secrets of the citys success with a crisp and merciless clarity',
    image: './books-images/SPQR.jpg'
  },
  {
    title: 'The saga of the Volsungs',
    author: 'Dr. Jackson Crawford',
    year: 2017,
    genre: 'Fiction',
    rating: 4.5,
    description: 'Sigurds daughter and her husband, the unparalleled Viking king and hero, Ragnar, who is also a dragon- slayer.',
    image: './books-images/81gailbnLYL._SY466_.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/Hobbit.jpg'
  },
  {
    title: 'Harry Potter and the Half-blood-Prince',
    author: 'J.K. Rowling',
    year: 2014,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: "./books-images/Half-blood-Prince.jpg"
  },
  {
    title: 'Harry Potter and the chamber of secrets',
    author: 'J.K. Rowling',
    year: 2014,
    genre: 'Adventure',
    rating: 4.2,
    description:
      'Harry will need powerful magic and true friends as he explores Voldemorts darkest secrets, and Dumbledore prepares him to face his destiny.',
    image: './books-images/Chamber-of-secrets.jpg'
  },
  {
    title: 'Harry Potter and the prisoner of Azkaban',
    author: 'J.K. Rowling',
    year: 2014,
    genre: 'Adventure',
    rating: 4.6,
    description:
      'Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry.',
    image: './books-images/Prisoner-of-Azkaban.jpg'
  },
  {
    title: 'Harry Potter and the deathly hallows',
    author: 'J.K. Rowling',
    year: 2014,
    genre: 'Adventure',
    rating: 4.6,
    description:
      'The final battle must begin - Harry must stand and face his enemy...',
    image: './books-images/Deathly-hallows.jpg'
  },
  {
    title: 'Harry Potter and the order of the phoenix',
    author: 'J.K. Rowling',
    year: 2014,
    genre: 'Adventure',
    rating: 4.6,
    description:
      'Harry must allow Professor Snape to teach him how to protect himself from Voldemorts savage assaults on his mind.',
    image: './books-images/Order-of-phoenix.jpg'
  },
  {
    title: 'Harry Potter and the philosophers stone',
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Adventure',
    rating: 4.6,
    description:
      'On Harrys eleventh birthday, a giant called Rubeus Hagrid bursts in with some astonishing news: Harry is a wizard, and he has a place at Hogwarts School. An incredible adventure is about to begin.',
    image: './books-images/Philosophers-stone.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/Fellowship.jpg'
  },
  {
    title: 'The Lord of the Rings: The Two Towers',
    author: 'J.R.R. Tolkien',
    year: 1955,
    genre: 'Fantasy',
    rating: 4.60,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/Towers.jpg'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    author: 'J.R.R. Tolkien',
    year: 1956,
    genre: 'Fantasy',
    rating: 4.90,
    description:
      'The last volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/Return.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/Shining.jpg'
  },
  {
    title: 'Celtic mythology',
    author: 'Josh Drake',
    year: 2020,
    genre: 'Fantasy',
    rating: 4.90,
    description:
      'The Complete Guide to Celtic Myths from the Irish, Scottish, Brittany and Welsh Mythology Including Tales, Gods and Legends',
    image: './books-images/Celtic.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/DCode.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/Hunger.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/Tatoo.jpg'
  },
  {
    title: 'The Oxford handbook of archaeology',
    author: 'Barry Cunliffe',
    year: 2020,
    genre: 'Dystopian',
    rating: 4.9,
    description:
      'The Handbook, written by 35 leading experts, provides an authoritative guide to the full range of archaeological activities.',
    image: './books-images/Archaeology.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/Galaxy.jpg'
  },
  {
    title: 'For your next book',
    author: 'Synnove',
    year: 2024,
    genre: 'Dystopian',
    rating: 4.90,
    description:
      'You are a stunning writer. Dont forget. Get it!',
    image: './books-images/Moleskine.jpg'
  }
]

let currentPage = 1;
const booksPerPage = 4;
const totalPages = Math.ceil(books.length / booksPerPage);

//--displayBooks: Muestra los libros en la página actual--//
function displayBooks(booksToShow) {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';

  booksToShow.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    bookElement.innerHTML = `
      <img src="${book.image}" alt="${book.title}">
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>Year: ${book.year}</p>
      <p>Rating: ${book.rating}</p>
      <span>${book.genre}</span>
      <p>${book.description}</p>
    `;

    bookList.appendChild(bookElement);
  });
}

//--showPage: Controla la paginación, mostrando solo los libros correspondientes a la página actual.--//
function showPage(page) {
  const start = (page - 1) * booksPerPage;
  const end = start + booksPerPage;
  const booksToShow = books.slice(start, end);

  displayBooks(booksToShow);

  document.getElementById('pageInfo').textContent = `Page ${page} of ${totalPages}`;
  document.getElementById('prevBtn').disabled = page === 1;
  document.getElementById('nextBtn').disabled = page === totalPages;
}


//--prevPage y nextPage: Cambian de página cuando se presionan los botones "Previous" y "Next".--//
function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function nextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

//--sortBooks: Ordena los libros según el criterio seleccionado en el menú desplegable (newest, oldest, rating).--//
function sortBooks(criteria, booksToSort) {
  let sortedBooks = [...booksToSort]; // Crear una copia del arreglo para no modificar el original

  switch (criteria) {
    case 'newest':
      sortedBooks.sort((a, b) => b.year - a.year);
      break;
    case 'oldest':
      sortedBooks.sort((a, b) => a.year - b.year);
      break;
    case 'rating':
      sortedBooks.sort((a, b) => b.rating - a.rating); // Ordenar por calificación de mayor a menor
      break;
    default:
      break;
  }

  return sortedBooks;
}


//--filterBooks: Filtra los libros según el texto de búsqueda y luego los ordena según el criterio seleccionado.--//
function filterBooks(query) {
  const lowerCaseQuery = query.toLowerCase();

  // Dentro de la función, la tarea es Filtrar los libros según la búsqueda
  let filteredBooks = books.filter(book => {
    return (
      book.title.toLowerCase().includes(lowerCaseQuery) ||
      book.author.toLowerCase().includes(lowerCaseQuery) ||
      book.genre.toLowerCase().includes(lowerCaseQuery) ||
      book.description.toLowerCase().includes(lowerCaseQuery)
    );
  });

  // Dentro de la función, la tarea es Obtener el criterio seleccionado en el menú desplegable
  const sortCriteria = document.getElementById('sortMenu').value;

  // Dentro de la función, la tarea es Ordenar los libros filtrados según el criterio seleccionado
  filteredBooks = sortBooks(sortCriteria, filteredBooks);

  // Dentro de la función, la tarea es Mostrar los libros ordenados y filtrados
  displayBooks(filteredBooks.slice(0, booksPerPage)); // Mostrar la primera página de resultados filtrados
  document.getElementById('pageInfo').textContent = `Showing ${filteredBooks.length} result(s)`;

  // Dentro de la función, la tarea es Actualizar botones de paginación
  document.getElementById('prevBtn').disabled = true;
  document.getElementById('nextBtn').disabled = filteredBooks.length <= booksPerPage;
}

//--event listeners: Se activan cuando el usuario escribe en la barra de búsqueda o cambia la opción en el menú desplegable.--//
document.getElementById('searchBar').addEventListener('input', (e) => {
  filterBooks(e.target.value);
  currentPage = 1; // Reiniciar a la primera página al filtrar
});

document.getElementById('sortMenu').addEventListener('change', () => {
  const query = document.getElementById('searchBar').value;
  filterBooks(query);
  currentPage = 1; // Reiniciar a la primera página al ordenar
});

// Inicializa la primera página
showPage(currentPage);