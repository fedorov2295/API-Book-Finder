

const initialState = {
    books: [],
    error: null,
    show: false,
    snippetBook: {},
    loading: false,
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case('SNIPPET_CLOSE'):
            return {
                ...state,
                show: false
            }
        case('SNIPPET_OPEN'):
            return {
                ...state,
                show: true,
                snippetBook: state.books[action.bookId]
            }
        case("SEARCHING_BOOKS_FAILED"):
            return {
                ...state,
                error:action.error,
            }
        case("SEARCHING_BOOKS_SUCCESS"):
            return {
                ...state,
                books: action.books,
            }
        case("LOADING"):
            return {
                ...state,
                loading: action.loading,
            }
        default: 
            return state;
    }
}

export default reducer;
