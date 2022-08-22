import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { first } from 'rxjs';
// import { User } from '../_models/user';
import { AuthenticationService } from '../_services/authenticatoin.service';
import { UserService } from '../_services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  loading=false;
  submitted=false;
  error?:string;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authenti:AuthenticationService,
    private userService:UserService
  ) { 
    if(this.authenti.currentUserValue)
    {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      username:['',Validators.required],
      password:['',[Validators.required,Validators.maxLength(6)]],
      
    });
  }
    // get f() {
    //   return this.registerForm.controls;
      
    // }

    get f() { return this.registerForm.controls; }

  
    onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      // this.userService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.register(this.registerForm.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // this.userService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['/login'], { queryParams:{registered:true} });
              },
              error: error => {
                  this.error=error;
                  this.loading = false;
              }
          });
  }
}
