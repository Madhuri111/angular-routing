import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValues } from '../models_here/base-formelements';
import { FormfieldcontrolService } from './formfieldcontrols.service';
import { Input, OnInit, Component, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
// import { FormValues } from '../models_here/base-formelements';

export interface OutputTypes {
  name: string;
  // email: string;
  // sex: string;
  // country: string;
  // message:string;
}

// const datavalues: OutputTypes[];

@Component({
  selector: 'app-basictemplate',
  templateUrl: './basictemplate.component.html',
  styleUrls: ['./basictemplate.component.css']
})



export class Basictemplate implements OnInit,OnChanges {



  @Input() formFields!: FormValues<any>[] ;
  // finalform: FormArray = new FormArray([]);
  payLoad = {};
  testform: FormGroup;
  // displayedColumns:string[]=['name','email','sex','country',''];
  

  displayedColumns:any=['name','email','country','message'];
  dataPur:any[] = [];
  hey: any;
  dataSource: MatTableDataSource<any>;

  constructor(private formfieldService: FormfieldcontrolService, private elementRef: ElementRef,
    private fb: FormBuilder


  ) { }

  ngOnInit(): void {

    this.testform =this.fb.group({
      studentForms: this.fb.array([
        this.formFields?this.formfieldService.toFormGroup(this.formFields):null
      ])
    });

    this.testform.get('studentForms').valueChanges.subscribe(students => {
      console.log('students', students)
    // this.someOtherFun()
  });
  }

  ngOnChanges() {
    // this.elementRef.nativeElement.focus();
    this.elementRef.nativeElement.focus();


  }
  onSubmit() {
    // this.payLoad.push(this.formG.value); 

    // this.payLoad=this.formG.setValue(formG)
    // this.payLoad = this.payLoad + JSON.stringify(this.formG.getRawValue());

    // console.log(this.testform.value);
    // console.log("data hereee");
    this.createDataSource(0);
    // console.log(this.dataPur);
    // this.dataSource = new MatTableDataSource((this.testform.get('studentForms') as FormArray).controls);;
  this.someOtherFun();
    console.log('datasource')
  console.log(this.dataSource)
  }

  someOtherFun () {
   this.dataSource = new MatTableDataSource((this.testform.get('studentForms') as FormArray).controls);
  }

  createDataSource(index:number) 
  {
    // return (((studentControls['studentForms']) as FormArray).controls);


    const hey=this.getStudentControls();
    console.log(hey[index].value);
    const mine=hey[index].value;
    // this.dataPur[index]=[];
    for(var i=0;i<hey.length;i++)
    {
      {
      this.dataPur[i]={
        name:mine.name,
        email:mine.email,
        country:mine.country,
        sex:mine.sex,
        message:mine.mes
      }

    }
    }
    console.log("data here");
    console.log(this.dataPur[index]);
    return this.dataPur;
      // const index:OutputTypes;
      // for(let index in hey)
      // {
      //   console.log(typeof(hey['index']));
      // }
      // return (((this.testform.controls['studentForms']) as FormArray).controls) ;

  }
  abstractToArray(fun:AbstractControl) :FormGroup {
    return (<FormGroup>fun)
  }
  
  getStudentValues()  {

    for(let val of this.dataPur)
    {
      console.log("whatthe");
      console.log(this.dataPur);
      console.log(typeof(this.dataPur));
      // return this.dataPur[val];
    }
    // console.log("printing here")
    // console.log(this.testform.controls['studentForms'] as FormArray);
    // return (((this.testform.controls['studentForms']) as FormArray).controls)  ;

    // return this.testform.controls['studentForms'] ;
  }

  getStudentControls() {
    // console.log(this.testform.get('studentForms'))
    let studentControls = this.testform.controls;
    // console.log(typeof studentControls)
    // console.log('student controls')
    // console.log("printing here")
    // console.log(this.testform.controls['studentForms']);
    // let c: FormGroup[] = studentControls['studentForms'];
    // console.log(c);
    // console.log(((studentControls['studentForms']) as FormArray).controls[0]);
    // let groupaArray:FormGroup[] = ((studentControls['studentForms']) as FormArray).controls;

    // if(studentControls['studentFomrs'] instanceof FormControl){
    //   console.log('it is a form array')
    // }

    // return this.testform.controls['studentForms'] ;


    return (((studentControls['studentForms']) as FormArray).controls);
    // console.log(i)
    // console.log(this.finalform.controls[i])

    // return (<FormGroup>this.finalform.get(i).controls)
    // console.log( form.controls);
    // console.log('one by one')
    // this.finalform.controls.forEach(control => {
    //   if(control instanceof FormGroup) {
    //     console.log(control.controls)
    //     // return Object.keys(control.controls)
    //     return this.formFields;
    //   }




    //  console.log(Object.keys(form.controls))
    // return Object.keys(form.controls);
  }

  // addStudentForms():FormGroup {
  //   return this.fb.group({
  //     studentForms: this.fields
  //   })
  // }


  removeStudentOnClick(studentIndex : number){
    (<FormArray>this.testform.get('studentForms')).removeAt(studentIndex);
    this.someOtherFun();
  }
  onAdd() {
    this.formFields?(<FormArray>this.testform.get('studentForms')).push(this.formfieldService.toFormGroup(this.formFields)) :null;

    // let hi=new FormGroup({
    //    this.formfieldService.getFormFields()
    // });
    // this.formG=this.formfieldService.toFormGroup(this.formFields);

    // // const manasas=this.formfieldService.toFormGroup(this.formFields);
    // // this.finalform.(manasas);
    // // this.formG = new FormGroup({})
    // // hi = this.formG;
    // this.finalform.push(this.formG);
    // console.log('form Values')
    // console.log(this.finalform)
    // console.log(typeof this.finalform)
    // console.log(this.finalform.length)
    // return this.fb.group
    // this.getFormFields(0);

    // this.finalform.controls.forEach(val =>{
    //   this.getFormFields(val)
    // })
    // this.getFormFields(this.finalform)
    // this.finalform.push(this.formfieldService.toFormGroup(this.formFields));
    // console.log(this.payLoad);

    // this.formG.setValue({toFormGroup(this.formFields)});
    // this.formfieldService.toFormGroup(this.formFields);
    // this.form.addControl(FormValues.name, new FormControl(''));

    // this.form.addControl(this.formfieldService)
    // this.form.push(toFormGroup(this.formFields));
    // this.form=this.form.push(new this.formfieldService.toFormGroup(this.formFields) )
  }


}