import { Component, OnInit } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { HiComponent } from './hi/hi.component';
import { ByeComponent } from './bye/bye.component';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {


  name: string ="hey";
  isVisible:boolean=true;
  defaultCom:any;
  say:any;



  ngOnInit() {
    console.log("hey");
    this.say=HiComponent;
  }

  sayHi()
  {
    // console.log("hello");
    this.say=HiComponent;
  }
  sayHello()
  {
    this.say=HelloComponent;
  }
  sayBye()
  {
    this.say=ByeComponent;
  }
}
