import React from 'react';
import classes from './Book.module.css';

const Book = (props) => {

    const cover = props.book.isbn ? props.book.isbn[1] : null
    const bookCoverSrc = `http://covers.openlibrary.org/b/isbn/${cover}-S.jpg`


    return (
        <span 
        className={classes.Book}
        onClick={props.snippetClicked}
        id={props.id}>
            <img src={bookCoverSrc} alt=''/>
            <p>Book Title: {props.book.title}</p>
            <p>Author: {props.book.author_name ? props.book.author_name.join(',') : null}</p>
        </span>
    )
};

export default Book;