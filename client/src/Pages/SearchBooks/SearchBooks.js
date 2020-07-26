import React from 'react';

//Components
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Header from '../../Components/Header/Header';
import Searchbar from '../../Components/Searchbar/Searchbar';
import BookTable from '../../Components/BookTable/BookTable';

//context
import { useBookStoreContext } from '../../Utils/BookStore';

function SearchBooks() {
    const [state, dispatch] = useBookStoreContext();

    return (
        <>
            <Header />
            <Breadcrumb />
            <Searchbar scope="google" />
            <BookTable books={state.searchedBooks} myBooks={state.myBooks} />
        </>
    )
}

export default SearchBooks;