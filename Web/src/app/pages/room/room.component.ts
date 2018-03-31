import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rooms } from '../../@core/data/boot-data.service';
import { unitsType } from '../../@core/defines';


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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.room = rooms[this.id]
      this.units = this.room.units



      this.units.sort((a, b) => {
        const sort = [unitsType.lamp, unitsType.motion, unitsType.analog]
        a = sort.indexOf(a.type)
        b = sort.indexOf(b.type)
        return a - b
      })
      console.log(this.units);
    });
  }

  updateStatus(event,unit) {
    console.log(unit.id);
    console.log(event);
  }

  updateValue(event,unit) {
    console.log(unit.id);
      }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
