import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { any } from 'sequelize/types/lib/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  api_prefix: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.api_prefix + '/signin', {
      email,
      password
    }, httpOptions);
  }
  register(username: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(this.api_prefix + '/signup', {
      username,
      email,
      role,
      password
    }, httpOptions);
  }

  showSuccess(): Observable<any> {
    return this.http.get(this.api_prefix + "/");

  }

  forgotPwd(data): Observable<any> {
    let API_URL = this.api_prefix + "/users/";
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.error)
      )
  }

  reset(email:string): Observable<any> {
    return this.http.post(this.api_prefix + '/forgotpwd', {
      email,
    }, httpOptions);
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
