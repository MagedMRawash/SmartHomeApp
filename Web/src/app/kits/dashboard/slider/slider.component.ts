import { Component, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-slider',
  styleUrls: ['./slider.component.scss'],
  templateUrl: './slider.component.html',
})

export class sliderComponent implements OnDestroy {

  value = 50;
  @Input() min = 0;
  @Input() max = 100;
  @Input('status') sliderOff = false;
  @Input('value') set setValue(value) {
    this.value = value;
  }
  @Output() change : EventEmitter<any> = new EventEmitter();
  @Output() clicked : EventEmitter<any> = new EventEmitter();

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  valueChange(event){
    this.change.emit(event)
    console.log(event);
    
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
  powerSwitch(event){
    this.sliderOff = event
    this.clicked.emit(this.sliderOff)
  }
}
