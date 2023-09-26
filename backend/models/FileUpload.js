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
    files: [
        {
          name: String,
          url: String,
        },
    ],
})

module.exports = mongoose.model('FileUpload', fileUploadSchema)
