import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { any } from 'sequelize/types/lib/operators';


@Injectable({
  providedIn: 'root'
})

export class UserServiceService 
{
    api_prefix: string = "http://localhost:3000";

    constructor(private http: HttpClient) 
    {}

    showSuccess(): Observable<any>
    {
        return this.http.get(this.api_prefix + "/users/");
    
    }

    SignIn(data): Observable<any> {
      let API_URL = this.api_prefix + "/users/signin";
      return this.http.post(API_URL, data)
        .pipe(
          catchError(this.error)
        )
    }

      // Sign-up
  signUp(data): Observable<any> {
   let API_URL = this.api_prefix + "/users/signup";
   return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  forgotPwd(data): Observable<any> {
    let API_URL = this.api_prefix + "/users/resetpassword";
    return this.http.post(API_URL, data)
       .pipe(
         catchError(this.error)
       )
   }
   ResetPwd(data): Observable<any> {
    let API_URL = this.api_prefix + "/users/forgotpwd";
    return this.http.post(API_URL, data)
       .pipe(
         catchError(this.error)
       )
   }

    
 // Handle Errors 
 error(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

    }
