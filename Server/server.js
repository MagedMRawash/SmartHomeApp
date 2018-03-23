const express = require('express')
const servant = require('./servant.layer')

const app = express()

// const serv = new servant()

app.get('/open', (req, res) => {
    console.log("send modbus ")
    console.log( servant )
    servant.lightOn(0)

    res.send('Hello World!')

})



app.listen(3000, () => console.log('Example app listening on port 3000!'))