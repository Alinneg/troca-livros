const User = require("../models/user")

class UserCtrl {
    constructor(dbPool) {
        this.user = new User(dbPool)
    }
}

module.exports = UserCtrl