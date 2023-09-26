const mongoose = require('mongoose')

const fileUploadSchema = mongoose.Schema({
    hash: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    files: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('FileUpload', fileUploadSchema)
