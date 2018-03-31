const express = require('express')
const data = require('./data')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.json(data)
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))