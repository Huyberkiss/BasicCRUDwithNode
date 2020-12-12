const express = require('express')
const app = express()
const port = 3000
const home = require('./routes/home')
const db = require('./config/db/DBConnection')

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', 'views')

db.connect()

app.use('/', home)

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
)