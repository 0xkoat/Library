let myLibray = [
    {
        id: crypto.randomUUID(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        isRead: true
    },
    {
        id: crypto.randomUUID(),
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt & David Thomas",
        pages: 352,
        isRead: false
    }
];

function createBookCard(book) {
    
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.id = book.id;

    const title = document.createElement('h3');
    title.className = 'title';
    title.textContent = book.title;
    card.appendChild(title);

    const author = document.createElement('p');
    author.className = 'author';
    title.textContent = 'By ${book.author}';
    card.appendChild(author);

    const pages = document.createElement('p');
    pages.className = 'pages';
    pages.textContent = '${book.pages} pages';
    card.appendChild(pages);

    const readBtn = document.createElement('button');
    readBtn.className = 'toggle-read';
    readBtn.textContent = book.isRead ? 'Mark Unread' : 'Mark Read';
    if (book.isRead) {
        readBtn.classList.add('read');
    }
    card.appendChild(readBtn);

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-book';
    removeBtn.textContent = 'Remove';
    card.appendChild(removeBtn);

    return card;
}



function displayBooks() {
    
    const container = document.getElementById('books-container');
    container.innerHTML = '';


    myLibray.forEach(book => {
        const bookCard = createBookCard(book);
        container.appendChild(bookCard);
    });

    attachCardEventListeners();
}



function attachCardEventListeners() {
    
    document.querySelectorAll('.remove-book').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.book-card');
            const bookId = parseInt(card.dataset.id);
            removeBook(bookId);
        });
    });

    document.querySelectorAll('.toggle-read').forEach(btn => {
        btn.addEventListener('click', function () {
            const card = this.closest('.book-card');
            const bookId = parseInt(card.dataset.id);
            toggleReadStaus(bookId);
        });
    });

}


function removeBook(bookId) {
    
    const bookIndex = myLibray.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        myLibray.splice(bookIndex, 1);
        displayBooks();
    }
}


function toggleReadStaus(bookId) {
    const book = myLibray.find(book => book.id === bookId);
    if (book) {
        book.isRead = !book.isRead;
        displayBooks();
    }
}


document.addEventListener('DOMContentLoaded', function () {
    displayBooks();
    document.getElementById('add-book-btn').addEventListener('click', function () {
        document.getElementById('book-form').classList.remove('hidden');
    });
});

