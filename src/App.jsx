/* eslint-disable react-redux/prefer-separate-component-file */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Book from './components/Books/Book/Book';
import Spinner from './UI/Spinner/Spinner';
import Modal from './UI/Modal/Modal';
import SnippetExtended from './components/SnippetExtended/SnippetExtended';
import * as actions from './store/actions/actions';

const App = (props) => {
  let snippets = null;

  if (props.loading && !props.error) {
    snippets = <Spinner />;
  } else if (props.error) {
    snippets = <div className="errorMessage">{props.error}</div>;
  } else {
    snippets = props.books.map((book, index) => (
      <div>
        <Book
          snippetClicked={() => props.clickSnippetHandler(index)}
          key={book.name + book.isbn}
          id={index}
          book={book}
        />
      </div>
    ));
  }

  return (
    <div className={classes.App}>
      {props.books ? (
        <Modal show={props.show} modalClosed={props.exitExtendedSnippet}>
          <SnippetExtended book={props.snippetBook} />
        </Modal>
      ) : null}
      <Search search={props.search} />
      <div className={classes.Main}>{snippets}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  error: state.error,
  show: state.show,
  snippetBook: state.snippetBook,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  exitExtendedSnippet: () => dispatch(actions.closeSnippet()),
  clickSnippetHandler: (id) => dispatch(actions.clickSnippet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// props - on...
// обработчик - handle..
// селектор
