import React from 'react';

//Components
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Header from '../../Components/Header/Header';
import Searchbar from '../../Components/Searchbar/Searchbar';

function MyBooks() {
    return (
        <>
            <Header />
            <Breadcrumb />
            <Searchbar scope="mybooks" />
        </>
    )
}

export default MyBooks;