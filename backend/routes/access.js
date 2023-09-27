const express = require('express')

const FileUpload = require('../models/FileUpload')

const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const {hash, password} = req.body
    FileUpload.findOne({hash: hash, password: password})
        .select('files')
        .then(record => {
            if(!record) {
                res.status(404).json({message: 'Invalid details'})
            } else {
                console.log(record.files)
                res.status(200).json(record.files)
            }
        })
        .catch(err => {
            res.status(500).json({message: err})
        })
})

module.exports  = router
