import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject,Observable, pipe } from "rxjs";
import { map } from "rxjs";
import { environment } from "src/environments/environment";

import { User } from "../_models/user";

@Injectable({providedIn:'root'})

export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User >;
    public currentUser : Observable<User>;

    constructor(private http:HttpClient)
    {
        // if(localStorage.getItem('currentUser'))
        // {
        this.currentUserSubject = new BehaviorSubject<User >(JSON.parse(localStorage.getItem('currentUser') ));
        
        // this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));

        this.currentUser = this.currentUserSubject.asObservable();
        // console.log(localStorage.getItem('currentUser'))
        console.log("yo")

        console.log(this.currentUser)
        // const hey=localStorage.getItem('currentUser') ;
        // if (hey) {
        //     this.currentUserSubject=new BehaviorSubject<User>((JSON.parse(localStorage.getItem('currentUser'))));
        //     this.currentUser=this.currentUserSubject.asObservable();

        // }
    }
    
    // ngOnChanges()
    // {
    //     console.log("yo")

    //     console.log(localStorage.getItem('currentUser'));

    // }

    public get currentUserValue(): User {
        return this.currentUserSubject.value!
    }

    login(username:string,password:string)
    {

        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`,{username,password})
        .pipe(map(user=> {
            localStorage.setItem('currentUser',JSON.stringify(user));
            // console.log(localStorage.getItem('currentUser'))
            this.currentUserSubject.next(user);

            return user;
        }));
    }
    logout()
    {
        // console.log(this.currentUser)
        // console.log(this.currentUserSubject.value)
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);

    }
}