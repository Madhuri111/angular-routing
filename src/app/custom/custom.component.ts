import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {


  isAvailable:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
