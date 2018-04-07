import { Injectable } from '@angular/core';


import { NbMenuItem } from '@nebular/theme';
import { BootDataService } from '../@core/data/boot-data.service';


@Injectable()
export class SideMenuService {
  baselink = '/pages'

  constructor(private dataService : BootDataService ) { }
  
  getMenuRooms(obj) {
    let items =  obj.map((item) => {
      item.link = this.baselink + '/room/' + item.id
      return item
    })
    console.log(items);
    return items
  }
  
  
  
  MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'nb-home',
      link: '/kits/dashboard',
      home: true,
    },
    {
      title: 'Rooms',
      icon: 'nb-keypad',
      link: '/pages/room',
      children: this.getMenuRooms(this.dataService.data)
      
    }, {
      title: 'FEATURES',
      group: true,
    },
    {
      title: 'UI Features',
      icon: 'nb-keypad',
      link: '/kits/ui-features',
      children: [
        {
          title: 'Buttons',
          link: '/kits/ui-features/buttons',
        },
        {
          title: 'Grid',
          link: '/kits/ui-features/grid',
        },
        {
          title: 'Icons',
          link: '/kits/ui-features/icons',
        },
        {
          title: 'Modals',
          link: '/kits/ui-features/modals',
        },
        {
          title: 'Popovers',
          link: '/kits/ui-features/popovers',
        },
        {
          title: 'Typography',
          link: '/kits/ui-features/typography',
        },
        {
          title: 'Animated Searches',
          link: '/kits/ui-features/search-fields',
        },
        {
          title: 'Tabs',
          link: '/kits/ui-features/tabs',
        },
      ],
    },
    {
      title: 'Forms',
      icon: 'nb-compose',
      children: [
        {
          title: 'Form Inputs',
          link: '/kits/forms/inputs',
        },
        {
          title: 'Form Layouts',
          link: '/kits/forms/layouts',
        },
      ],
    },
    {
      title: 'Kits',
      icon: 'nb-gear',
      children: [
        {
          title: 'Tree',
          link: '/kits/kits/tree',
        }, {
          title: 'Notifications',
          link: '/kits/kits/notifications',
        },
      ],
    },
    {
      title: 'Maps',
      icon: 'nb-location',
      children: [
        {
          title: 'Google Maps',
          link: '/kits/maps/gmaps',
        },
        {
          title: 'Leaflet Maps',
          link: '/kits/maps/leaflet',
        },
        {
          title: 'Bubble Maps',
          link: '/kits/maps/bubble',
        },
        {
          title: 'Search Maps',
          link: '/kits/maps/searchmap',
        },
      ],
    },
    {
      title: 'Charts',
      icon: 'nb-bar-chart',
      children: [
        {
          title: 'Echarts',
          link: '/kits/charts/echarts',
        },
        {
          title: 'Charts.js',
          link: '/kits/charts/chartjs',
        },
        {
          title: 'D3',
          link: '/kits/charts/d3',
        },
      ],
    },
    {
      title: 'Editors',
      icon: 'nb-title',
      children: [
        {
          title: 'TinyMCE',
          link: '/kits/editors/tinymce',
        },
        {
          title: 'CKEditor',
          link: '/kits/editors/ckeditor',
        },
      ],
    },
    {
      title: 'Tables',
      icon: 'nb-tables',
      children: [
        {
          title: 'Smart Table',
          link: '/kits/tables/smart-table',
        },
      ],
    },
    {
      title: 'Auth',
      icon: 'nb-locked',
      children: [
        {
          title: 'Login',
          link: '/auth/login',
        },
        {
          title: 'Register',
          link: '/auth/register',
        },
        {
          title: 'Request Password',
          link: '/auth/request-password',
        },
        {
          title: 'Reset Password',
          link: '/auth/reset-password',
        },
      ],
    },
  ];
  

  
}


