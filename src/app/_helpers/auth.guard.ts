import { Injectable } from "@angular/core";
import { Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../_services/authenticatoin.service";
@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate {
    
    constructor(
        private router:Router,
        private authenticationService:AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser=this.authenticationService.currentUserValue;
        if(currentUser)
        {
            return true;
        }
        this.router.navigate(['/login'],{queryParams:{returnUrl:state.url}});
        return false;
    
    
    }

    // so basically first created authentication service as a behaviour subject initiated with a value , and took it as an observable too for user. 
    // then in auth guard we are checking if the current value is there ,if its there it will return true else navigate to login and false
    // operators used for the above one: canActivate which takes route and state and returns true or false
    // in error interceptoe using http interceptor we basically are intercepting error and based on the type of it we are returning accordingl
    // if it's 401 error then it means unauthorized so we are logging out right away. for doing this function we used following operators:
    // here we are using intercept function for intercepting error . and using catcherror for catching the error after that using throwerror receiving error and throwing it in face of user
    // for the above intercept function returning it as an Observable:which is of type any http event
    // please go through arrow function,intercept function,location reload(even tho u know now) in a more detailed way
    // so after this fake backend , where we are using switch cases and manipulating by comparing the possible url as a concept of fake backend
    // wrote functions authenticate,allusers etc in handling routes based on the type of request.
    // we are checking if it's logged in based on the comparisino of jwt token of current request with our jwt token we have
    // so using this loggedin function while returning users if not logged in we are sending unauthorized error else we are returning users as a new http response
    // we are taking username and password from the body and comparing it to set of data of users and checking whether we already have it or not
    // in users to get a clear idea of what's happening, we are setting items to users everytime we have correct details of users
    // in jwt interceptors , checking if the user is logged in and if the upi is correct then assigning it to a token thats how its working
    // and there are few functions i need to go through in detail here request.clone()
    
}

