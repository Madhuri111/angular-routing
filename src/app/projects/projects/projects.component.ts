import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authenticatoin.service';
import { routes } from './../projects-routing.module';
// import routes from '../projects-routing.module';
// import { routes } from 'src/app/myrouting/myrouting-routing.module';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  // constructor(private router: Router) {}

  ngOnInit(): void {}

  open = false;

  routes = routes;
  isExpanded = true;
  sideBarOpen = true;
  public sidebarShow: boolean = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

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
