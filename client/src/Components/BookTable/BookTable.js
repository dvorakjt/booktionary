import React from 'react';
import './style.css';

function BookTable({ books, myBooks }) {
    return (
        <table>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Authors</th>
                <th>View</th>
                <th>Add/Delete</th>
            </tr>
            {books.map(book => {
                return (
                    <tr>
                        <td><a href={book.link} target="_blank"><img src={book.imgUrl} alt={`Cover of ${book.title}`} /></a></td>
                        <td><a href={book.link} target="_blank">{book.title}</a></td>
                        <td>{book.authors.join(", ")}</td>
                        <td><button className="viewBtn">View</button></td>
                        <td>
                            {(() => {
                                const bookAdded = false;
                                if (myBooks.length > 0) {
                                    myBooks.forEach(({ id }) => {
                                        if (id === book.id) {
                                            bookAdded = true;
                                        }
                                    })
                                }
                                if (!bookAdded) {
                                    return <button className="addBtn">Add this book!</button>
                                } else {
                                    return <button className="deleteBtn">Remove this book</button>
                                }
                            })()}
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default BookTable;