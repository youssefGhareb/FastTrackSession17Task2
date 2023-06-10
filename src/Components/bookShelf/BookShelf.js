import React from 'react'
import "./bookshelf.scss"
import Book from '../book/Book';
const BookShelf = (props) => {
        return (
        <div className='bookshelf'>
            <h2>{props.shelfTitle ? props.shelfTitle : "No Title"}</h2>
            <div className='row py-5'>
                {props.books && props.books.map((book) => {
                    return <Book key={book.isbn_10} book={book} shelves={props.shelves} onChangeShelf={props.onBookChangeShelf} />;
                })}
            </div>
        </div>
    )
}

export default BookShelf;