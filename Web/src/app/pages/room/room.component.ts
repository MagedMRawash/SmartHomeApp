import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BootDataService } from '../../@core/data/boot-data.service';
import { unitsType } from '../../@core/defines';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  unitsType = unitsType;
  id: number;
  private sub: any;
  room: any // :room
  units: any[] // :units[]
  value: any;

  constructor(private route: ActivatedRoute, private roomService : BootDataService ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.room = this.roomService.rooms[this.id]
      this.units = this.room.units

      this.units.sort((a, b) => {
        const sort = [unitsType.digital, unitsType.motion, unitsType.analog]
        a = sort.indexOf(a.type)
        b = sort.indexOf(b.type)
        return a - b
      })
      console.log(this.units);
    });
  }

  updateStatus(status,unit) {
    console.log(unit)
    this.roomService.setCoil(unit.plcSlot,status).subscribe((res)=>{
      console.log(res);
    })
  }

  updateValue(event,unit) {
    console.log(unit.id);
    this.roomService.getCoil(unit.plcSlot).subscribe((res)=>{
      console.log(res);
    })
      }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
