let books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isSoldOut: false,
        price: 15.99
    },
    {
        title: "1984",
        author: "George Orwell",
        isSoldOut: true,
        price: 12.99
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isSoldOut: false,
        price: 9.99
    }
];

function displayBooks() {
    books.sort((a, b) => a.title.localeCompare(b.title)); // Sort books alphabetically by title

    let output = "";
    for (let book of books) {
        output += `<div class="book-item">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>${book.isSoldOut ? "Sold Out" : "In Stock"}</p>
            <p>Price: $${book.price.toFixed(2)}</p>
        </div>`;
    }

    document.getElementById("booksList").innerHTML = output;
}

function addBook() {
    let title = document.getElementById("titleInput").value;
    let author = document.getElementById("authorInput").value;
    let isSoldOut = document.getElementById("soldOutInput").checked;
    let price = parseFloat(document.getElementById("priceInput").value);

    books.push({
        title,
        author,
        isSoldOut,
        price
    });

    displayBooks();
}

window.onload = displayBooks;
