import React from 'react';
import "./book.scss";

const Book = ({ book, shelves, onChangeShelf }) => {
    return (
        <div className='col-md-4'>
            <div className='book'>
                <div className='book-imgCont'>
                    <img src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-M.jpg`} />
                    <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle rounded-circle py-3 px-4" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            {shelves.map((shelf) => <li onClick={()=>{onChangeShelf(book.isbn_10, shelf.id)}}><a className={`dropdown-item ${shelf.id == book.shelfID ? "active" : ""}`} href="#">{shelf.title}</a></li>)}
                        </ul>
                    </div>
                </div>
                <h4>{book.title}</h4>
                <p>{book.by_statement ? book.by_statement : ""}</p>
            </div>
        </div>
    )
}

export default Book;