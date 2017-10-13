import { AbstractMenuServiceService, MenuServiceService, User } from './menu-service.service';
import { MenuItem } from './menu-item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() config: MenuItem[] = [];
  @Output() itemSelected = new EventEmitter<MenuItem>();

  constructor(private userService: AbstractMenuServiceService) { }

  get user(): User {
    return this.userService.user;
  }

  hasRoles(requiredRoles: string[], userRoles: string[]) {
    for(let r1 of requiredRoles) {
      for (let r2 of userRoles) {
        if (r1 === r2) return true;
      }
    }
    return false;
  }

  ngOnInit() {
  }

}
