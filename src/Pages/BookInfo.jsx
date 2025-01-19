import React, { useEffect, useState } from "react";
import Book from "../components/ui/Book";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const BookInfo = ({ books, addToCart, cart}) => {
  const { bookID } = useParams();
  const book = books.find(book => +book.id === + bookID);

    function addBookToCart(book) {
        addToCart(book)
    }

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img 
                src={book.url} 
                alt="" 
                className="book__selected--img"/>
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    salePrice={book.salePrice}
                    originalPrice={book.originalPrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem voluptas iste placeat accusantium adipisci
                    ipsam quam vel, optio rem quas tenetur hic eligendi id
                    fugiat pariatur quos deserunt consequuntur praesentium?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Exercitationem voluptas iste placeat accusantium adipisci
                    ipsam quam vel, optio rem quas tenetur hic eligendi id
                    fugiat pariatur quos deserunt consequuntur praesentium?
                  </p>
                </div>
                    {
                        cart.find(book => +book.id === + bookID) ?
                        <Link to="/cart">
                            <button className="btn"> 
                                View Cart
                            </button>
                        </Link> :
                        <button className="btn" onClick={() => addBookToCart(book)}> 
                            Add to cart
                        </button>
                    }   
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
            <div className="row">
                <div className="book__selected--top">
                    <h2 className="book__selected--title--top">Recommended Books</h2>
                </div>
                <div className="books">
                    {
                        books
                        .filter((book) => book.rating === 5 && +book.id !== +bookID)
                        .splice(0,4)
                        .map(book => <Book book={book} key={book.id}/>)
                    }
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;