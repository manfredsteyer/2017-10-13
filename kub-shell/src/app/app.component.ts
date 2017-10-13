import {Component} from '@angular/core';
import {MenuItem, MenuServiceService} from 'kub-lib';
import {AbstractMenuServiceService} from '../../../kub-lib/src/menu/menu-service.service';

@Component(
    {selector: 'app-root', templateUrl: './app.component.html', styles: []})
export class AppComponent {
  title = 'app';
  config: MenuItem[] = [];
  constructor(private menuService: AbstractMenuServiceService) {

    this.config = [
      {
        label: 'Home',
        route: 'http://www.kubus-it.de',
        requiredRoles: ['user']
      },
      {
        label: 'This',
        route: 'http://www.aok.de',
        requiredRoles: ['user']
      },
      {
        label: 'That',
        route: 'http://www.zeit.de',
        requiredRoles: ['admin']
      }
    ];
    

    menuService.user.roles = ['user'];
  }
}
