
const Book = require("../models/book.js");


// get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    if (books.length > 0) {
      res.status(200).json({
        success: true,
        message: "All books retrieved successfully",
        data: books,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No books found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

//get book by id
const getBookById = async (req, res) => {
  try {
    const id = req.params.id;

    const singleBook = await Book.findById(id);
    if (singleBook) {
      res.status(200).json({
        success: true,
        message: "Book retrieved successfully",
        data: singleBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// add new book
const addBook = async (req, res) => {
  try {
    const newBook = req.body;

    const createdBook = await Book.create(newBook);
    if (createdBook) {
      res.status(201).json({
        success: true,
        message: "Book created successfully",
        data: createdBook,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Book not created",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// update book by id
const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedBook = req.body;

    const book = await Book.findByIdAndUpdate(id, updatedBook, { new: true });
    if (book) {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book,
      })
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// delete book by id
const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedBook = await Book.findByIdAndDelete(id);
    if (deletedBook) {
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};