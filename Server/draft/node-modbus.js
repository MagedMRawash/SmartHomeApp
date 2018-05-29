// create an empty modbus client
var ModbusTCP = require("modbus-serial");
var client = new ModbusTCP();

// open connection to a tcp line
client.connectTCP("169.254.184.84", { port: 502 });
client.setID(1);
// read the values of 10 registers starting at address 0
// on device number 1. and log the values to the console.
setInterval(function () {
  client.readDiscreteInputs(0, 10, function (err, data) {
    if (data) {
      console.log(data.data);
    }
  });
}, 500);

// setInterval(function () {
//   client.wr(0, 10, function (err, data) {
//     if (data) {
//       console.log(data.data);
//     }
//   });
// }, 500);



