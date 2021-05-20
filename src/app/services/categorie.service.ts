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
export class CategorieService {
  api_prefix: string = "http://localhost:3000/categorie";
  private headerrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }





  deleteCat(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/categorie/delete/${id}`);
   }

   deletessCat(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/sous_cat/delete/${id}`);
   }







}
