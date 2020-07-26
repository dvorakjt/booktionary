import React, { useEffect } from 'react';

//Components
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Header from '../../Components/Header/Header';
import Searchbar from '../../Components/Searchbar/Searchbar';
import BookTable from '../../Components/BookTable/BookTable';

//context
import { useBookStoreContext } from '../../Utils/BookStore';

const axios = require('axios');

//determine the correct port
const PORT = process.env.PORT || 'http://localhost:3001';

function SearchBooks() {
    const [state, dispatch] = useBookStoreContext();

    //make sure that there are no existing records so that duplicate books aren't added
    useEffect(() => {
        async function fetchData() {
            if (state.myBooks.length < 1) {
                try {
                    const response = await axios.get(PORT + '/api/getbooks');
                    dispatch({
                        type: "UPDATE_MY_BOOKS",
                        myBooks: response.data
                    });
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchData();
    }, [])

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