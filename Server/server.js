const express = require('express')
const data = require('./data')
const utils = require('./utils')
var cors = require('cors')
var bodyParser = require('body-parser');

const modbus = require('./modbus')
const app = express()

app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', (req, res) => {
    res.send('Wellcome to SoulProject !')
})

app.get('/data', (req, res) => {
    console.log(data.data);
    res.json(data.data)
})

app.get('/set/:device/:value', (req, res) => {
    let device = utils.parseAddress(device.plcSlot)
    let value = utils.getValue(req.params.value)
console.log("asdasd get ");

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
    modbus.getDevice(device, req.params.device[0]).then((sucess) => {
        console.log(sucess);
        res.json({ 'value': sucess })
    }, (error) => {
        console.error(error);
        modbus.conect()
        res.json({ 'value': error })
    });
})

app.post('/mode-status/:mode', (req, res) => {

    const modeTitle = req.params.mode
    // const modeStatus = req.params.status


    // select mode from mode lest 
    // TODO: 
    //  what if it cant find mode in mode list 
    let mode = data.data.modes.find((element) => {
        return element.title === modeTitle
    })
    console.log(mode);
    
if(mode){
    // loop over each device in the mode and set its value to the mode configured status 
    mode.units.map((unit) => {
        
        // return coresponding device with its ID to send its PLC slot number 
        let device = data.utils.getUnit(unit.unit)
        let address = utils.parseAddress(device.plcSlot)
        let value = utils.getValue(unit.status)
    
        // set each device to its coresponding value from mode pre-configered value 
        modbus.setDevice(address, value).then((sucess) => {
            console.log(sucess);
        }, (error) => {
            console.error(error);
            modbus.conect()
        });

    })
    res.json({'sucess':true})
    
}else{
    res.sendStatus(404)   
}
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))