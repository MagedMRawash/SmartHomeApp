function getAddressValue(address) {
    let addArray = address.toLowerCase().split('')
    type = addArray[0]
    // extract number from API 
    number = parseInt(address.slice(1), 10)
    // covert that number to its PLC address equivilant 
    binaryIndex = number % 10
    if (binaryIndex < 8) {
        extinsionID = parseInt((number) / 10)

        number = (extinsionID * 8) + binaryIndex

        // TODO: check why y18 is === y20 

        return { type, number }
    }
    else {
        console.error(("please enter right address for PLC "));

    }
}

function parseAddress(address) {
    let { type, number } = getAddressValue(address) || "defulte"

    switch (type) {
        case 'y':
            return 1280 + number
            break;
        case 'x':
            return 1024+ number
            break;

        default:
            return address
            break;
    }

}

module.exports = {
    parseAddress
}