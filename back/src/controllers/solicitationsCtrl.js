const Solicitation = require("../models/solicitations")

class SolicitationsCtrl {
    constructor(dbPool) {
        this.solicitation = new Solicitation(dbPool)
    }
}

module.exports = SolicitationsCtrl