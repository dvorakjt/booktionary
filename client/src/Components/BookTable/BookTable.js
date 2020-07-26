import React from 'react';
import './style.css';

//context
import { useBookStoreContext } from '../../Utils/BookStore';

//determine the correct port
const PORT = process.env.PORT || 'http://localhost:3001';

const axios = require('axios');

function BookTable({ books, myBooks }) {
    const [state, dispatch] = useBookStoreContext();

    async function handleAdd(bookIndex) {
        try {
            const post = await axios.post(PORT + '/api/addbook', { ...books[bookIndex], authors: books[bookIndex].authors.join(", ") });
            const response = await axios.get(PORT + '/api/getbooks');
            dispatch({
                type: "UPDATE_MY_BOOKS",
                myBooks: response.data
            });
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Authors</th>
                    <th>View</th>
                    <th>Add/Delete</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => {
                    return (
                        <tr key={index.toString()}>
                            <td><a href={book.link} target="_blank"><img src={book.imgUrl} alt={`Cover of ${book.title}`} /></a></td>
                            <td><a href={book.link} target="_blank">{book.title}</a></td>
                            <td>{book.authors}</td>
                            <td><button className="viewBtn">View</button></td>
                            <td>
                                {(() => {
                                    let bookAdded = false;
                                    if (myBooks.length > 0) {
                                        myBooks.forEach(({ googleId }) => {
                                            if (googleId === book.googleId) {
                                                bookAdded = true;
                                            }
                                        })
                                    }
                                    if (!bookAdded) {
                                        return <button className="addBtn" onClick={() => { handleAdd(index) }}>Add this book!</button>
                                    } else {
                                        return <button className="deleteBtn">Remove this book</button>
                                    }
                                })()}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default BookTable;