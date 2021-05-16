import React, { useState } from 'react'
import classes from './App.module.css';
import Search from './components/Search/Search';
import Book from './components/Books/Book/Book';
import Spinner from './UI/Spinner/Spinner'


const App = props => {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);
  

  fetch(`http://openlibrary.org/search.json?title=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        
        if (jsonResponse.numFound > 0) {
          setBooks(jsonResponse.docs);
          setLoading(false);
          console.log(jsonResponse.docs[1].title)
        console.log(jsonResponse.docs[1].author_name.join(','))
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  	};

  return (
    <div className={classes.App}>
      <Search search={search}/>
      <div className={classes.Main}>
      {loading && !errorMessage ? (
         <Spinner />
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          books.map((book, index) => (
            <Book key={`${index}-${book.title}`} title={book.title} author={book.author_name} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
