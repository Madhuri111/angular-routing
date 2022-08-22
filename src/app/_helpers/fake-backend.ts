import { Injectable } from "@angular/core";
import {HttpRequest,HttpResponse,HttpHandler,HttpEvent,HttpInterceptor,HTTP_INTERCEPTORS} from '@angular/common/http'
import { Observable,of,throwError } from "rxjs";
import { materialize,dematerialize,delay,mergeMap } from "rxjs/operators";
import { User } from "../_models/user";

// users:string | null;

// const name: string = emp.name ?? '';
// let users:User[]=JSON.parse(localStorage.getItem('users') || '{}');
let users:User[] = JSON.parse(localStorage.getItem('users')) || [];

console.log("hey")
// console.log(JSON.parse(localStorage.getItem('users')))
if(localStorage.getItem('users'))
{
    JSON.parse(localStorage.getItem('currentUser'))
    // users:User[]=JSON.parse(localStorage.getItem('users')??JSON.parse(localStorage.getItem)
}

// let users = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', username: 'test', password: 'test' }];

// let users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

@Injectable()

export class FakeBackendInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const {url,method,headers,body} =req;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize())



        function handleRoute() {
            switch(true) 
            {
                case url.endsWith('users/authenticate') && method =="POST" :
                    return authenticate();
                case url.endsWith('users/register') && method=="POST":
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
    
                default:
                    return next.handle(req);
            }
        }

        function register()
        {
            const userr=body
            userr.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;

            // userr.id = users.length ? Math.max(...users.map((x: { id: any; }) => x.id)) + 1 : 1;
            users.push(userr);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();        }

        function getUsers()
        {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }
        function unauthorized() {
            // return throwError(()=>{  error: { status:401 } });
            // return throwError(()=>( status: 401, error: { message: 'Unauthorized' } ))
            return throwError(()=>({ status: 401, error: { message: 'Unauthorised' } }));

        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function authenticate()
        {
            const {username,password}=body;
            const user=users.find(x=> x.username === username && x.password === password)
            // if(!user) return error("Incorrect",401);
            if(!user) return error("Username or password is Incorrect");

            return ok({
                id:user.id,
                username:user.username,
                firstName:user.firstName,
                lastName:user.lastName,
                token: 'fake-jwt-token'

            }

            )
        }
        function ok(body?:any)
        {
            return of(new HttpResponse({status:200,body}));
        }
        function error(message: string)
        {
            // below one threw an error so instead used the original one written here
            return throwError(()=>(message));
            // return throwError(()=>{error:{status}});
        }
    }
}

export const fakeBackendProvider ={
    provide:HTTP_INTERCEPTORS,
    useClass:FakeBackendInterceptor,
    multi:true,
}

