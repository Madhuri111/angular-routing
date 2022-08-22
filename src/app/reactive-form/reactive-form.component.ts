import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {


  // we will use form builder here
  constructor(private formBuilder:FormBuilder) { }

  profileForm=this.formBuilder.group({
    firstName:[''],
    lastName:[''], 
  })

  saveForm(){
    console.log('Form data is ', this.profileForm.value);
  }

  

}
