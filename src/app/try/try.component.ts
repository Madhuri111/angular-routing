import { Component, OnInit } from '@angular/core';
import { FormControl,FormArray,FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit {

  studentForm:FormGroup;
  constructor( private fb:FormBuilder) {}

ngOnInit(): void {
  this.studentForm= this.fb.group({
    students:this.fb.array([])
  })
}

    students(): FormArray {
    return this.studentForm.get("students") as FormArray
  }

  newStudent():FormGroup{
    return this.fb.group(
      {
        name:'',
        rollnumber:'',
        gender:'',
        course:'',
        password:''
      }
    );
  }

  addStudent(){
    this.students().push(this.newStudent());
  }

    onSubmit(){
    console.log(this.studentForm.value);
  }
  

}
