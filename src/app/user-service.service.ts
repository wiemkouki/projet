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
  private headerrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(this.api_prefix + '/signin', {
      email,
      password
    }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true
    });
  }

  register(username: string, email: string, password: string, role: string): Observable<any> {
    return this.http.post(this.api_prefix + '/signup', {
      username,
      email,
      role,
      password
    }, httpOptions)

  }

  reset( email: string): Observable<any> {
    return this.http.post(this.api_prefix + '/forgotpwd', {
      email,
    }, httpOptions)
  }

  forgot(form: object) {
    const url = `${this.api_prefix}/resetpassword`;
    console.log(form);
    return this.http.post(url, JSON.stringify(form), { headers: this.headerrs });
  }


  change(form: object) {
    const url = `${this.api_prefix}/change`;
    console.log(form);
    return this.http.post(url, JSON.stringify(form), { headers: this.headerrs });
  }
  // change(email: string ,newpassword: string): Observable<any> {
  //   return this.http.post(this.api_prefix + '/changepwd', {
  //     email,
  //     newpassword
  //   }, httpOptions)

  // }


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
