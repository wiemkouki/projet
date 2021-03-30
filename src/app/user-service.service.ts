import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService 
{
    api_prefix: string = "http://localhost:3000";

    constructor(private http: HttpClient) 
    {

    }

    showSuccess(): Observable<any>
    {
        return this.http.get(this.api_prefix + "/users/");
    }
}
