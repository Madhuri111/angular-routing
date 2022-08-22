import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authenticatoin.service';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(private authenticatonService:AuthenticationService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(error => {
            console.log(error)
            if(error.status === 401)
            {
                this.authenticatonService.logout();
                window.location.reload();
            }

            // const error=err.error.message || err.statusText;
            // return throwError(error);
            // throw new Error(error);
            // const errorr = error.errorr?.message || error.status;

            //  throwError(()=>
                    return    throwError(() => new Error(error))

            // new Error('errorr')
            // {return error;}
        

        }))
    
    
}
}