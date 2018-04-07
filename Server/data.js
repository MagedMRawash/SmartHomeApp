
let unitsType = {
    lamp: 'lamp',
    // motion: 'motion',
    analog: 'analog'
}


let modes = [{
    title: 'reading',
    units: [{ room: 0, unit: 1, status: 1 }, { room: 0, unit: 0, status: 0 }]
}, {
    title: 'sleeping',
    units: [{ room: 0, unit: 1, status: 0 }, { room: 0, unit: 0, status: 0 }]
}
]

let units = [
    { // interface 
        title: "Light",
        id: 0,
        type: unitsType.lamp,
        address: '52',
        plcSlot: 'y1'
    }, {
        title: "motion",
        id: 1,
        type: unitsType.lamp,
        address: '98',
        plcSlot: 'y3'
    }, {
        title: "analog",
        id: 2,
        type: unitsType.analog,
        address: '96',
        plcSlot: 'y2',
        min: 0,
        max: 100,

    }
]


// Rooms array

const rooms = [
    //Room Object
    // interface 
    {
        title: "living room",
        id: 0 // must be uniq
        // we need to find more convintions names instead of units
        , units: [0, 1, 2, 1]

    },
    {
        title: "Motaz room",
        id: 1 // must be uniq
        // we need to find more convintions names instead of units
        , units: [0, 1, 2, 1,2]

    }

]
const homeConfig = {
    title: "Motaz Room"
    , rooms: rooms

}



function getRoom(room) {
    return homeConfig.rooms.find((el) => { return el.id === room })
}

function getUnit(unit) {
    return units.find((el) => { return el.id === unit })
}

function MODBUSTCP(address) {
    return true
}

function MODBUSTCPRegester(address) {
    return 70
}

function getStatus(unit) {
    device = getUnit(unit)
    // next must be observable 
    return MODBUSTCP(device.address)
}


let joinRooms = rooms.map((room) => {
    room.units = room.units.map((unit) => {
        element = getUnit(unit)
        if (element.type === unitsType.analog) {
            element.value = MODBUSTCPRegester(unit.address)
            element.status = (element.value > element.min)
        }
        else {
            element.status = MODBUSTCP(unit.address)
        }
        return element
    }
    )
    return room
})

// console.log(
//     JSON.stringify(joinRooms)
// );

module.exports = {
    homeConfig,
    rooms,
    units,
    modes
}
