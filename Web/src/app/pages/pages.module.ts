import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';


import { Routes, RouterModule } from '@angular/router';
import { ThemeModule } from '../@theme/theme.module';

import { RoomComponent } from './room/room.component';
import { DashboardModule } from '../kits/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'room/:id', component: RoomComponent },
      {
        path: '',
        redirectTo: 'room',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ThemeModule,
    DashboardModule
  ],
  declarations: [PagesComponent, RoomComponent],
})
export class PagesModule { }
