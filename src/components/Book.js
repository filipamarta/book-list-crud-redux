import React, { useState } from "react";
import "./Book.scss";
import { connect } from "react-redux";

const Book = ({ book, deleteBook, updateBook }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [imageSrc, setImageSrc] = useState(book.cover);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBook({ id: book.id, title: title, author: author, cover: imageSrc });
    setIsEdit(false);
  };

  return (
    <div className="book">
      {isEdit ? (
        <article>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              name="author"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <input
              name="imageSrc"
              value={imageSrc}
              onChange={(event) => setImageSrc(event.target.value)}
            />
            <button type="submit">Update book</button>
          </form>
        </article>
      ) : (
        <article>
          <div className="image">
            <img src={book.cover} alt={book.title} />
          </div>
          <div className="content">
            <h2>{book.title}</h2>
            <h6>{book.author}</h6>
            <nav>
              <button
                className="remove-btn"
                type="button"
                name="delete"
                onClick={() => deleteBook(book.id)}
              >
                Remove
              </button>
              <button
                className="edit-btn"
                type="button"
                name="edit"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </nav>
          </div>
        </article>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteBook: (id) => dispatch({ type: "DELETE", payload: id }),
  updateBook: (book) => dispatch({ type: "UPDATE", payload: book }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
