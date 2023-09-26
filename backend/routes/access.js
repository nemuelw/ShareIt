const express = require('express')

const FileUpload = require('../models/FileUpload')

const router = express.Router()

router.post((req, res) => {
    const {hash, password} = req.body
    FileUpload.find({hash: hash, password: password}, (err, files) => {
        if(err) {
            console.error(err)
            res.status(500)
            return 
        } else {
            res.status(200).json(files[0])
        }
    })
})

module.exports  = router
