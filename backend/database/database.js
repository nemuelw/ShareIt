const mongoose = require('mongoose')

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        const db_string = `mongodb+srv://nilaypatel10721:2Bfz5m9mvHS7YRiL@cluster0.r39k1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        mongoose.connect(db_string)
            .then(() => {
                console.log('[*] Connection to DB successful')
            })
            .catch(err => {
                console.error('[!] Error connecting to DB: ', err)
            })
    }
}

module.exports = new Database()
