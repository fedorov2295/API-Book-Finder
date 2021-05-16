import React from 'react';
import classes from './Book.module.css';

const Book = (props) => {
    

    
    return(
        <div className={classes.Book}>
            <p><strong>Book Title:</strong> {props.title}</p>
            <p><strong>Author:</strong> {props.author}</p>
        </div>
    )
};

export default Book;