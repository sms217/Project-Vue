var express = require('express');
var router = express.Router();
const books = require('../model/books');

/* GET home page. */
router.get('/', function(req, res) {
  let briefs = []
  books.forEach(element => {
      let {bookId, title, author, cover} = element
      briefs.push({bookId, title, author, cover})
  });
  res.json(briefs)
});

router.get('/:bookId', (req, res)=>{
    const bookId = req.params.bookId
    let book = books.find(element=>element.bookId==bookId)
    res.json(book)
})

module.exports = router;
