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