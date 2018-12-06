const Change = require("../models/change")

class ChangeCtrl {
    constructor(dbPool) {
        this.change = new Change(dbPool)
    }
}

module.exports = ChangeCtrl