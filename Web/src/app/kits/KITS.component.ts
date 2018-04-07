import { Component } from '@angular/core';
import { SideMenuService } from '../pages/side-menu.service';
 
@Component({
  selector: 'ngx-kits',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class KitsComponent {
  constructor( private sidemenu : SideMenuService ) {}
  menu = this.sidemenu.MENU_ITEMS;
}
