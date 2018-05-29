import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL, API } from '../defines';
@Injectable()
export class BootDataService {
    homeConfig: any
    units: any
    modes: any
    rooms: any = [
        {
            "title": "living room",
            "id": 0,
            "units": [
                {
                    "title": "Light",
                    "id": 0,
                    "type": "lamp",
                    "address": "52",
                    "plcSlot": "y1",
                    "status": true
                },
                {
                    "title": "motion",
                    "id": 1,
                    "type": "lamp",
                    "address": "98",
                    "plcSlot": "y3",
                    "status": true
                },
                {
                    "title": "analog",
                    "id": 2,
                    "type": "analog",
                    "address": "96",
                    "plcSlot": "y2",
                    "min": 0,
                    "max": 100,
                    "value": 70,
                    "status": true
                },
                {
                    "title": "motion",
                    "id": 1,
                    "type": "lamp",
                    "address": "98",
                    "plcSlot": "y3",
                    "status": true
                }
            ]
        },
        {
            "title": "Motaz room",
            "id": 1,
            "units": [
                {
                    "title": "Light",
                    "id": 0,
                    "type": "lamp",
                    "address": "52",
                    "plcSlot": "y1",
                    "status": true
                },
                {
                    "title": "motion",
                    "id": 1,
                    "type": "lamp",
                    "address": "98",
                    "plcSlot": "y3",
                    "status": true
                },
                {
                    "title": "analog",
                    "id": 2,
                    "type": "analog",
                    "address": "96",
                    "plcSlot": "y2",
                    "min": 0,
                    "max": 100,
                    "value": 70,
                    "status": true
                },
                {
                    "title": "motion",
                    "id": 1,
                    "type": "lamp",
                    "address": "98",
                    "plcSlot": "y3",
                    "status": true
                },
                {
                    "title": "analog",
                    "id": 2,
                    "type": "analog",
                    "address": "96",
                    "plcSlot": "y2",
                    "min": 0,
                    "max": 100,
                    "value": 70,
                    "status": true
                }
            ]
        }
    ]




    bootData: any

    constructor(private http: HttpClient) {
        this.getBootData().subscribe((res: any) => {
            // add booting data into data object
            console.log(res);

            this.bootData = res
            this.homeConfig = res.homeConfig
            this.rooms = res.rooms
            this.units = res.units
            this.modes = res.modes
        })
    }

    getData() {
        return this.bootData;
    }

    getBootData() {
        const url = API.bootData
        return this.http.get(url)
    }




    //// next will move to action service spacialized in comunication with plc 
    setCoil(unit,value){
        const url = API.setCoil.replace('{device}',unit).replace('{value}',value)
        return this.http.get(url)
    }  


    //// next will move to action service spacialized in comunication with plc 
    getCoil(unit){
        const url = API.getCoil.replace('{device}',unit)
        return this.http.get(url)
    }  



}
