const mysql = require('mysql')

async function makeConnection() {
    const con = mysql.createPool({
        host: "localhost",
        user: "root",
        password: ""
    })

    return con
}

module.exports = {
    makeConnection: makeConnection
}