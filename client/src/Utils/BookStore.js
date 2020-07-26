import React, { createContext, useReducer, useContext } from "react";

//Actions
const UPDATE_SEARCHED_BOOKS = "UPDATE_SEARCHED_BOOKS";
const UPDATE_MY_BOOKS = "UPDATE_MY_BOOKS";
const UPDATE_FILTER = "UPDATE_FILTER";

//Create the context
const BookStoreContext = createContext();
const { Provider } = BookStoreContext;

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SEARCHED_BOOKS:
            return {
                ...state,
                searchedBooks: action.searchedBooks
            };

        case UPDATE_MY_BOOKS:
            return {
                ...state,
                myBooks: action.myBooks
            };
        case UPDATE_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default:
            return state;
    }
}

const BookStoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        searchedBooks: [],
        myBooks: [],
        filter: ""
    });

    return <Provider value={[state, dispatch]} {...props} />

}

const useBookStoreContext = () => {
    return useContext(BookStoreContext);
}

export { BookStoreProvider, useBookStoreContext }

