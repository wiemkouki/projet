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
  api_prefixx: string = "http://localhost:3000/client";
  private headerrs = new HttpHeaders({ 'Content-Type': 'application/json' });
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

  register( email: string, password: string, role: string): Observable<any> {
    return this.http.post(this.api_prefix + '/signup', {

      email,
      role,
      password
    }, httpOptions)

  }

  reset(email: string): Observable<any> {
    return this.http.post(this.api_prefix + '/forgotpwd', {
      email,
    }, httpOptions)
  }

  Save(user): Observable<any> {
    return this.http
      .post(this.api_prefix + '/save', {
        user,
      }, httpOptions)
  }


  valid(id: number) {
    const url = `http://localhost:3000/file/valide/${id}`;
    return this.http.put(url, { headers: this.headerrs });
  }



  downfile(fileName: Blob) {
    const url = `http://localhost:3000/file/downfile/${fileName}`;
    return this.http.get(url, { headers: this.headerrs });
  }
  download() {
    const url = `http://localhost:3000/file/download`;
    return this.http.post(url, { headers: this.headerrs });
  }

  deleteDoc(id: string): Observable<any>{
    return this.http.delete(`http://localhost:3000/file/delete/${id}`);
    }


   updateAdmin(id:string, nom_boutique: string, tel: number, adresse: string): Observable<any> {
    return this.http.put(`http://localhost:3000/users/updateAdmin/${id}`, {
      nom_boutique,
      tel,
      adresse
    }, httpOptions)

  }

  updateC(id: string, name: string, tel: number, adresse: string): Observable<any> {
    return this.http.post(this.api_prefixx + `/updateC/${id}`, {
      name,
      tel,
      adresse

    }, httpOptions)





  }





















  deleteUser(id: number): Observable<any> {
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
