import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { any } from 'sequelize/types/lib/operators';
import { param } from 'express-validator';

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



//  updateUser(): Observable<any>{
//  return this.http.post('http://localhost:3000/users/updateUser');
//  }


deleteUser(id: number): Observable<any>{
  return this.http.get(`http://localhost:3000/users/delete/${id}`);
 }


  forgot(form: object) {
    const url = `${this.api_prefix}/resetpassword`;
    console.log(form);
    return this.http.post(url, JSON.stringify(form), { headers: this.headerrs });
  }

  updateUser() {
    const url = `${this.api_prefix}/updateUser`;
    return this.http.post(url, { headers: this.headerrs });
  }

  change(id: String, form: object) {
    const url = `${this.api_prefix}/changepwd/${id}`;
    console.log(form);
    return this.http.post(url, JSON.stringify(form), { headers: this.headerrs });
  }
  // change(id: any ,newpassword: string): Observable<any> {
  //   return this.http.post(this.api_prefix + '/changepwd', {
  //     id,
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