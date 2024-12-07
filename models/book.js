const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title : {
    type : String,
    required : [true,"title is required"],
    trim : true,
    maxLength : [10000,"title must be less than 10000 characters"],
  },
  author : {
    type : String,
    required : [true,"author is required"],
    trim : true,
  },
  year :{
    type : Number,
    required : [true,"year is required"],
    trim : true,
    min : [1000,"year must be greater than 1000"],
    max : [new Date().getFullYear(),"year must not be in future"],
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});


const Book = mongoose.models.Book || mongoose.model("Book",bookSchema);
module.exports = Book;