import { Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { VERSION } from '@angular/material';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';
// import { SharedAngularMaterialModule } from './sharedangularmaterial/sharedangularmaterial.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appDrawer', {static: false}) appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Dashboards ',
      iconName: 'dashboard',
      route: 'dashboards',
      children: [
        {
          displayName: 'Dashboard-1',
          iconName: 'dashboard',
          route: 'dashboards/dashboard1'
        },
        {
          displayName: 'Dashboard-2',
          iconName: 'dashboard',
          route: 'dashboards/dashboard2'
        }
      ]
    },
    {
      displayName: 'Angular Material UI ',
      iconName: 'dashboard',
      route: 'dashboards',
      children: [
        {
          displayName: 'Demo-1',
          iconName: 'dashboard',
          route: 'dashboards/dashboard1'
        },
        {
          displayName: 'Demo-2',
          iconName: 'dashboard',
          route: 'dashboards/dashboard2'
        }
      ]
    },
    {
      displayName: 'Pages ',
      iconName: 'videocam',
      route: 'pages',
      children: [
        {
          displayName: 'Page-1',
          iconName: 'star_rate',
          route: 'pages/pageslayout1'
        },
        {
          displayName: 'Page-2',
          iconName: 'star_rate',
          route: 'pages/pageslayout2'
        }
      ]
    },
    {
      displayName: 'Apps ',
      iconName: 'movie_filter',
      children: [
        {
          displayName: 'Apps-1',
          iconName: 'star_rate',
          route: 'apps/apps1'
        },
        {
          displayName: 'Apps-2',
          iconName: 'star_rate',
          route: 'apps/apps2'
        }
      ]
    },
    {
      displayName: 'Forms ',
      disabled: true,
      iconName: 'report_problem',
      children: [
        {
          displayName: 'Form-1',
          iconName: 'star_rate',
          route: 'forms/form1'
        },
        {
          displayName: 'Form-2',
          iconName: 'star_rate',
          route: 'forms/form2'
        }
      ]
    },
    {
      displayName: 'Tables ',
      iconName: 'person',
      route: 'tables',
      children: [
        {
          displayName: 'Table-1',
          iconName: 'star_rate',
          route: 'tables/table1'
        },
        {
          displayName: 'Table-2',
          iconName: 'star_rate',
          route: 'tables/table2'
        }
      ]
    },
    {
      displayName: 'Widgets',
      iconName: 'person',
      route: 'widgets',
      children: [
        {
          displayName: 'Widget-1',
          iconName: 'star_rate',
          route: 'widgets/widget1'
        },
        {
          displayName: 'Widget-2',
          iconName: 'star_rate',
          route: 'widgets/widget2'
        }
      ]
    },
    {
      displayName: 'Maps ',
      iconName: 'group',
      children: [
        {
          displayName: 'Map-1',
          iconName: 'star_rate',
          route: 'maps/map1'
        },
        {
          displayName: 'Map-2',
          iconName: 'star_rate',
          route: 'maps/map2'
        }
      ]
    },
    {
      displayName: 'Typography',
      iconName: 'star_rate',
      route: 'typography'
    },
    {
      displayName: 'Icons',
      iconName: 'star_rate',
      route: 'icons'
    },
    {
      displayName: 'Notifications',
      iconName: 'star_rate',
      route: 'notifications'
    }
  ];

  constructor(private navService: NavService) {
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }
}
