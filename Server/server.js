const express = require('express')
const data = require('./data')
const utils = require('./utils')

const modbus = require('./modbus')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.json(data)
})

 
app.get('/set/:device/:value', (req, res) => {
    let device = utils.parseAddress(req.params.device)
    let value =  parseFloat(req.params.value)
    modbus.setDevice(device, value).then((sucess) => {
        console.log(sucess);
        res.json(sucess)
    }, (error) => { 
        console.error(error);
        modbus.conect()
        res.json(error)
    });
})

 
app.get('/get/:device', (req, res) => { 
    let device = utils.parseAddress(req.params.device)
    console.log(device);
    
    modbus.getDevice(device).then((sucess) => {
        console.log(sucess);
        res.json({'value':sucess})
    }, (error) => { 
        console.error(error);
        modbus.conect()        
        res.json({'value':error})
    });
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))