import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL, API } from '../defines';
@Injectable()
export class BootDataService {
  homeConfig: any
  units: any
  modes: any



   data =[
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


  constructor(private http: HttpClient) { }
  
  getData() {
    return this.data;
  }
  getBootData() {
    const url = API.bootData
    return this.http.get(url).map((res) => {
      console.log(res);
      
      return res
    })
  }
}

