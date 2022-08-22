import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { routes } from './myrouting-routing.module';
@Component({
  selector: 'app-myrouting',
  templateUrl: './myrouting.component.html',
  styleUrls: ['./myrouting.component.css'],
})
export class MyroutingComponent {
  open = false;
  routes = routes;
  isExpanded = false;
  sideBarOpen = true;
  public sidebarShow: boolean = false;
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  // formFields: Observable<FormValues<any>[]>;
  // constructor(service: FormfieldcontrolService) {
  //   console.log(this.formFields);

  //   this.formFields = service.getFormFields();
  //   console.log(this.formFields);
  // }
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
