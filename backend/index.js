const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const uploadRouter = require('./routes/upload')

app.use('/upload', uploadRouter)

app.listen(1234, () => {
    console.log("[*] Server is up and running ...")
})
