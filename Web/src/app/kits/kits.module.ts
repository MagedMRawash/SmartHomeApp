import { NgModule } from '@angular/core';

import { KitsComponent } from './kits.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { KitsRoutingModule } from './kits-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { SideMenuService } from '../pages/side-menu.service';


const KITS_Components = [
  KitsComponent,
];

@NgModule({
  imports: [
    KitsRoutingModule,
    ThemeModule,
    DashboardModule,
  ],
  declarations: [
    ...KITS_Components,
  ],providers:[SideMenuService]
})
export class KitsModule {
}
