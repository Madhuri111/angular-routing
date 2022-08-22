import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  color:string = "#ffffff";

  users = [
    {
      "name":"person1",
      "city":"US",
      "code":1
    },
    {
      "name":"person2",
      "city":"korea",
      "code":2
    }
  ]

  ngOnInit(): void {
  }

}
