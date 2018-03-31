const modbus = require('jsmodbus')

// configration
let host = '169.254.184.84'
let port = '502'

// create a modbus client
var client = modbus.client.tcp.complete({
    'host': host,
    'port': port,
    'autoReconnect': true,
    'reconnectTimeout': 1000,
    'timeout': 5000,
    'unitId': 0
});

client.connect();
 
client.on('connect', function () {
 
    // make some calls
 
    client.readCoils(0, 13).then(function (resp) {
 
        // resp will look like { fc: 1, byteCount: 20, coils: [ values 0 - 13 ], payload: <Buffer> } 
        console.log(resp);
 
    }, console.error);
    
})



    // client.close()


    
// module.exports = new ServantMan(); 