/* eslint-disable arrow-body-style */

export const setLoading = (loadingStatus) => {
    return {
        type:"LOADING",
        loading: loadingStatus,
    }
}

export const clickSnippet = (id) => {
    return{
        type:"SNIPPET_OPEN",
        bookId:id,
    }
}

export const closeSnippet = () => {
    return{
        type:"SNIPPET_CLOSE"
    }
}

export const fetchingBooksFailed = (error) => {
    return {
        type: "SEARCHING_BOOKS_FAILED",
        error,
    }
}

export const fetchingBooksSuccess = (books) => {
    return {
        type: "SEARCHING_BOOKS_SUCCESS",
        books,
    }
}

export const fetchingBooks = (searchValue) => {
    return dispatch => {
    dispatch(setLoading(true));
    fetch(`http://openlibrary.org/search.json?title=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch(setLoading(false));
        dispatch(fetchingBooksSuccess(jsonResponse.docs));
      })
      .catch(jsonResponse => {
        dispatch(setLoading(false));
        dispatch(fetchingBooksFailed(jsonResponse.Error));
      })
    }
}
