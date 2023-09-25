const express = require('express')
const multer = require('multer')

const router = express.Router()
const upload = multer()

router.post('/', upload.array('files'), (req, res) => {
    const password = req.body.password
    res.status(200).json({'hash':'test_hash'})
})

module.exports = router
