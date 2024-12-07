const {getAllBooks, getBookById, addBook, updateBook, deleteBook} = require("../controllers/booksController.js");

const express = require("express");
const router = express.Router();

router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.post("/addbook", addBook);
router.put("/updatebook/:id", updateBook);
router.delete("/deletebook/:id", deleteBook);

module.exports = router;