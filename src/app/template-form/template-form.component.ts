import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  newOne=new FormControl('');
  constructor() { }


  ngOnInit(): void {
  }

  loginUser(item:any)
  {
    console.warn(item);
  }

}
