import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models/user';
import { FormfieldcontrolService } from './createform/formfieldcontrols.service';

import { AuthenticationService } from './_services/authenticatoin.service';
import { routes } from './app-routing.module';
import { routess } from './projects/projects-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormfieldcontrolService],
})
export class AppComponent {
  public currentUser: User;
  componentName = 'userr';
  title = 'custom_structural';
  open = false;
  routes = routes;
  childroutes = routess;
  isExpanded = true;
  sideBarOpen = true;
  public sidebarShow: boolean = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      (x) => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  close() {
    this.open = false;
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
