const Book = require("../models/book")

class BookCtrl {
    constructor(dbPool) {
        this.book = new Book(dbPool)
    }
}

module.exports = BookCtrl