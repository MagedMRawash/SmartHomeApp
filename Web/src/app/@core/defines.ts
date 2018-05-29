export const baseURL = "http://127.0.0.1:3000"

export const API = {
    bootData: baseURL+'/data',
    setCoil:baseURL+'/set/{device}/{value}',
    getCoil:baseURL+'/get/{device}'
}

// unitsType is all devices catigories 
export const unitsType = {
    digital: 'digital',
    motion: 'motion',
    analog: 'analog'
}
