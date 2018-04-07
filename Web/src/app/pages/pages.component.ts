import { Component, OnInit } from '@angular/core';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
})
export class PagesComponent  {
  constructor(private sidemenu : SideMenuService ){

  }

  menu = this.sidemenu.MENU_ITEMS;
}
