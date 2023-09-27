const mongoose = require('mongoose')

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect('mongodb://localhost/shareit')
            .then(() => {
                console.log('[*] Connection to DB successful')
            })
            .catch(err => {
                console.error('[!] Error connecting to DB: ', err)
            })
    }
}

module.exports = new Database()
