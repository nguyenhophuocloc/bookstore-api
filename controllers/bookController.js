const { Author, Book } = require("../models/model");

const bookController = {
  //ADD BOOK
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const savedBook = await newBook.save();
      if(req.body.author){
        const author=Author.findById()
      }
      res.status(200).json(savedBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
