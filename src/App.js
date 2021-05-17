import React, { useState } from 'react'
import classes from './App.module.css';
import Search from './components/Search/Search';
import Book from './components/Books/Book/Book';
import Spinner from './UI/Spinner/Spinner';
import Modal from './UI/Modal/Modal';
import SnippetExtended from './components/SnippetExtended/SnippetExtended';


const App = props => {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [show, showModal] = useState(false);
  const [snippetBook, setsnippetBook] = useState({})

  const clickSnippetHandler = (book) => {
    showModal(true);
    const target = book.target.localName === "p" || book.target.localName === "img" ? book.target.parentElement : book.target
    setsnippetBook(books[target.id]);
    console.log(book)
  }

  const exitExtendedSnippet = () => {
    showModal(false)
  }

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);


    fetch(`http://openlibrary.org/search.json?title=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.numFound > 0) {
          setBooks(jsonResponse.docs);
          setLoading(false);
          console.log(jsonResponse.docs)
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className={classes.App}>
      {books ? <Modal show={show} modalClosed={exitExtendedSnippet}>
                <SnippetExtended book={snippetBook} />
      </Modal>: null}
      <Search search={search} />
      <div className={classes.Main}>
        {loading && !errorMessage ? (
          <Spinner />
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          books.map((book, index) => (
            <div>
              <Book snippetClicked={clickSnippetHandler} key={index} id={index} book={book} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
