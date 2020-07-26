import React from 'react';

//Components
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Header from '../../Components/Header/Header';
import Searchbar from '../../Components/Searchbar/Searchbar';
import BookTable from '../../Components/BookTable/BookTable';

import { useBookStoreContext } from '../../Utils/BookStore';

function MyBooks() {
    const [state, dispatch] = useBookStoreContext();
    return (
        <>
            <Header />
            <Breadcrumb />
            <Searchbar scope="mybooks" />
            <BookTable books={state.myBooks} myBooks={state.myBooks} />
        </>
    )
}

export default MyBooks;