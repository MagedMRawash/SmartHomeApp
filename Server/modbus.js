// create an empty modbus client
var Modbus = require("modbus-serial");
var client = new Modbus();

let config = {
    // host: "127.0.0.1",
    host: "192.168.1.3",
    port: 502,
}
 
// open connection to a tcp line
client.connectTCP(config.host, { port: config.port }).then((suc) => {
    console.log(suc);
}, (suc) => {
    console.log(suc);
});
// client.setID(1);

// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.
// setInterval(function() {
//     client.readHoldingRegisters(0, 10, function(err, data) {
//         console.log(data.data);
//     });
// }, 1000);


function getDevice(device) { 
    return client.readCoils(device, 1)
}


function setDevice(device, value) {
    console.log(device);
    console.log(typeof value);
    return client.writeCoil(device, value)
}

function conect() {
    client.connectTCP(config.host, { port: config.port }).then((suc) => {
        console.log(suc);
    }, (suc) => {
        console.log(suc);
    });
}

module.exports = {
    setDevice,
    getDevice,
    conect
}