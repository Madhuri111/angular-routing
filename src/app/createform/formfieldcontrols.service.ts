import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn,Validators,FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { FormValues } from '../models_here/base-formelements';

@Injectable({
  providedIn: 'root'
})
export class FormfieldcontrolService {

  constructor() { }

  toFormGroup(inputs:FormValues<string>[]):FormGroup {
    const mygroup:any={}

    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      // if (validator.length)
      mygroup[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(mygroup);    
  }

  // addFormGroup(inputs:FormValues<string>[]):FormGroup {
  //   const mygroup:any={}

  //   inputs.forEach(input => {
  //     let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
  //     switch (input.validator) {
  //       case "email":
  //         validator.push(Validators.email);
  //         break;
  //       default:
  //         break;
  //     }
  //     mygroup[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
  //                                       : new FormControl(input.value || '');
  //   });
  //   return new FormGroup(mygroup);

  // }

  getFormFields() : Observable<FormValues<string>[]> {

    const inputs: FormValues<string>[] = [

      new FormValues<string>({
        controlType: "textbox",
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new FormValues<string>({
        controlType: "textbox",
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: "email",
        order: 2
      }),

      new FormValues<string>({
        controlType: "dropdown",
        key: 'country',
        label: 'Country',
        options: [
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'}
        ],
        order: 3
      }),

      new FormValues<string>({
        controlType: "checkbox",
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 4
      }),

      new FormValues<string>({
        controlType: "radio",
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        order: 5
      }),

      new FormValues<string>({
        controlType: "textarea",
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 6
      })
    ];

    const sortOrder=(inputs.sort((a, b) => a.order - b.order));
    
      

      return of(sortOrder);



  }
  
}
