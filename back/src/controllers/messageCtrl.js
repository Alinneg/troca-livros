const Message = require("../models/message")

class MessageCtrl {
    constructor(dbPool) {
        this.message = new Message(dbPool)
    }
}

module.exports = MessageCtrl