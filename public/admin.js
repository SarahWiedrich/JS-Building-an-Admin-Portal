async function getBooks(){
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json()
    displayBooks(books)
}

function displayBooks(books){
    let displayDiv = document.querySelector('#root')
    let bookList = document.createElement('ul')
    books.forEach(book => {
        let title = document.creaateElement('li');
        title.textContent = book.title
        bookList.appendChild(title)
    })
    displayDiv.appendChild(bookList)
}

getBooks()