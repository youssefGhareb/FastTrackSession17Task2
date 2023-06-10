import logo from './logo.svg';
import './App.scss';
import React from 'react';
import BookShelf from './Components/bookShelf/BookShelf';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      books:[],
      shelves: [
        {
          id: 1,
          title: "Currently Reading"
        },
        {
          id: 2,
          title: "Want To Read"
        },
        {
          id: 3,
          title: "Have Read"
        },
      ]
    }
  }
  async componentDidMount(){
    await this.getBooksFromList();
    this.addRandomShelfToBooks();
  }
  async getBooksFromList(){
    const response = await fetch("http://openlibrary.org/people/youssef_ghareb/lists/OL227789L/editions.json");
    const jsonData = await response.json();
    this.setState({
      books: jsonData.entries,
      shelves: this.state.shelves
    });
  }

  onChangeShelf(bookID, newShelfID){
    const updatedBooksState = this.state.books.map((book)=>{
      if(book.isbn_10 == bookID){
        return {...book, shelfID: newShelfID}
      } else {
        return{...book}
      }
    })
    this.setState({
      books: updatedBooksState
    });
  }

  addRandomShelfToBooks(){
    if(this.state.books.length > 0){
      const newBooks = this.state.books.map((book) => {
        const randomID = Math.floor(Math.random() * (3 - 1 + 1) + 1);
        return { ...book, shelfID: randomID }
      }); 
      this.setState({
        books: newBooks,
        shelves: this.state.shelves
      });
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.shelves.map((shelf) => <BookShelf key={shelf.id} shelves={this.state.shelves} shelfTitle={shelf.title} books={this.state.books.filter((book) => book.shelfID == shelf.id)} onBookChangeShelf={this.onChangeShelf.bind(this)} />)}
        </div>
      </div>
    );
  }
}


export default App;
