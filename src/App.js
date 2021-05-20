import React from 'react'
import { connect } from 'react-redux';
import classes from './App.module.css';
import Search from './components/Search/Search';
import Book from './components/Books/Book/Book';
import Spinner from './UI/Spinner/Spinner';
import Modal from './UI/Modal/Modal';
import SnippetExtended from './components/SnippetExtended/SnippetExtended';
import * as actions from './store/actions/actions'

const App = props => {

return (
  <div className={classes.App}>
    {props.books ? <Modal show={props.show} modalClosed={props.exitExtendedSnippet}>
      <SnippetExtended book={props.snippetBook} />
    </Modal> : null}
    <Search search={props.search} />
    <div className={classes.Main}>
      {props.loading && !props.error ? (
        <Spinner />
      ) : props.error ? (
        <div className="errorMessage">{props.error}</div>
      ) : (
        props.books.map((book, index) => (
          <div>
            <Book snippetClicked={props.clickSnippetHandler.bind(this,index)} key={index} id={index} book={book} />
          </div>
        ))
      )}
    </div>
  </div>
);
}

const mapStateToProps = state => {
  return {
    books: state.books,
    error: state.error,
    show: state.show,
    snippetBook: state.snippetBook,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    exitExtendedSnippet: () => dispatch(actions.closeSnippet()),
    clickSnippetHandler: (id) => dispatch(actions.clickSnippet(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
