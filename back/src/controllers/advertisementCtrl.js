const Advertisement = require("../models/advertisement")

class AdvertisementCtrl {
    constructor(dbPool) {
        this.advertisement = new Advertisement(dbPool)
    }
}

module.exports = AdvertisementCtrl