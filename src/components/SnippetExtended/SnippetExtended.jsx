import React from 'react';
import classes from './SnippetExtended.module.css';

const SnippetExtended = ({ book }) => {
  const cover = book.isbn ? book.isbn[1] : null;
  const bookCoverSrc = `http://covers.openlibrary.org/b/isbn/${cover}-M.jpg`;

  return (
    <div className={classes.Snippet}>
      <img src={bookCoverSrc} alt="" />
      <p>
        <strong>Book Title:</strong> {book.title}
      </p>
      <p>
        <strong>Authors:</strong>{' '}
        {book.author_name ? book.author_name.join(',') : null}
      </p>
      <p>
        <strong>Publish Date:</strong>
        {book.publish_date ? book.publish_date[1] : null}
      </p>
      <p>
        <strong>Publisher:</strong>
        {book.publisher}
      </p>
      <p>
        <strong>Isbn:</strong>
        {book.isbn ? book.isbn.join(',') : null}
      </p>
    </div>
  );
};

export default SnippetExtended;
