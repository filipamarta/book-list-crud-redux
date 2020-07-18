import React from "react";
import { connect } from "react-redux";
import Book from "./Book";
import "./BookList.scss";
import AddBookForm from "./AddBookForm";

const BookList = ({ books }) => {
  return (
    <div>
      <h1>
        My list of feminist books{" "}
        <span role="img" aria-labelledby="book emoji">
          📚
        </span>
      </h1>
      <p>
        This is a small CRUD project with React JS and Redux, Hooks and SASS.
      </p>
      <AddBookForm />
      <div className="book-list">
        {books.length > 0 &&
          books.map((book, index) => {
            return <Book key={index} book={book} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
