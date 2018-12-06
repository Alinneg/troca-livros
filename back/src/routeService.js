const Moment = require("moment")

const AdvertisementController = require("./controllers/advertisementCtrl")
const BookController = require("./controllers/bookCtrl")
const ChangeController = require("./controllers/changeCtrl")
const MessageController = require("./controllers/messageCtrl")
const SolicitationsController = require("./controllers/solicitationsCtrl")
const UserController = require("./controllers/userCtrl")

class RouterService {
    constructor(app, dbPool) {
        this.app = app
        this.dbPool = dbPool

        this.advertisementController = new AdvertisementController(dbPool)
        this.bookController = new BookController(dbPool)
        this.changeController = new ChangeController(dbPool)
        this.messageController = new MessageController(dbPool)
        this.solicitationsController = new SolicitationsController(dbPool)
        this.userController = new UserController(dbPool)
    }

    setRoutes() {
        this.app.get("/books", [this.getAllBooks.bind(this)])
        this.app.post("/books", [this.creatBook.bind(this)])
        this.app.get("/books/:idBook", [this.getBookById.bind(this)])
        this.app.put("/books/:idBook", [this.updateBook.bind(this)])
        this.app.delete("/books/:idBook", [this.setDeletedBook.bind(this)])

        this.app.post("/makeAdvertisement/", [this.makeAdvertisement.bind(this)])

        this.app.post("/makeExchangeBookSolicitation", [this.makeExchangeBookSolicitation.bind(this)])
        this.app.post("/exchangeBook", [this.exchangeBook.bind(this)])

        this.app.post("/sendMessageTo", [this.sendMessageTo.bind(this)])

        this.app.post("/signIn", [this.canEnter.bind(this)])
    }

    getAllBooks(req, res) {
        let response = {
            hasError: null,
            data: null,
            message: null
        }
        let statusCode = null

        this.dbPool.getConnection(function (err, conn) {
            const query =
                "SELECT " +
                "nome" +
                "autor" +
                "estadoDeConservacao" +
                "FROM livros"
            conn.query(query, (err, book) => {
                conn.release()
                if (book && book.length) {
                    response.hasError = false
                    response.data = book
                    statusCode = 200
                } else {
                    response.hasError = false
                    response.data = []
                    response.message = "Nenhum livro encontrado"
                    statusCode = 200
                }

                res.status(statusCode)
                res.json(response)
                return next()
            })
        })
    }

    creatBook(req, res) {

    }

    getBookById(req, res) {

    }

    updateBook(req, res) {

    }

    setDeletedBook(req, res) {

    }

    makeAdvertisement(req, res) {

    }

    makeExchangeBookSolicitation(req, res) {

    }

    exchangeBook(req, res) {

    }

    sendMessageTo(req, res) {

    }

    canEnter(req, res) {

    }


}

module.exports = RouterService