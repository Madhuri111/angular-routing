import { Component } from '@angular/core';
import { FormValues } from '../models_here/base-formelements';
import { FormfieldcontrolService } from '../createform/formfieldcontrols.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.css']
,
providers : [FormfieldcontrolService]

})
export class FinalFormComponent  {

  formFields!: Observable<FormValues<any>[]> ;
  constructor(service: FormfieldcontrolService) {
    // console.log(this.formFields);

    this.formFields = service.getFormFields();
    // console.log(this.formFields);
  }


}



