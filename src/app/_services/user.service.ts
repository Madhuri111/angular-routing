import { User } from "../_models/user";
import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})

export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        // console.log("hey")
        // console.log(this.http.get<User[]>(`${environment.apiUrl}/users`));
        console.log(`${environment.apiUrl}/users`);
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    register(user: User)
    {
        return this.http.post(`${environment.apiUrl}/users/register`,user);
    }
    delete(id: number)
    {
        return this.http.delete(`${environment.apiUrl}/users/${id}`);
    }
}