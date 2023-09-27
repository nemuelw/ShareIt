const express = require('express')

const FileUpload = require('../models/FileUpload')

const router = express.Router()

router.post('/', (req, res) => {
    const {hash, password} = req.body
    FileUpload.findOne({hash: hash, password: password})
        .select('files')
        .then(record => {
            if(!record) {
                res.status(401).json({message: 'Invalid details'})
            } else {
                res.status(200).json(record.files)
            }
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({message: err})
        })
})

module.exports  = router
