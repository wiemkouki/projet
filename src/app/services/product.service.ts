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
export class ProductService {
  api_prefix: string = "http://localhost:3000/produit";
  private headerrs = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }



  deleteProduct(id: string): Observable<any>{
    return this.http.get(`http://localhost:3000/produit/delete/${id}`);
   }
  //  updateProduct(id: number): Observable<any>{
  //   return this.http.get(`http://localhost:3000/produit/updateP/${id}`);
  //  }
  
  updateProduct(id: number) {
    const url = `${this.api_prefix}/updateP/${id}`;
    return this.http.put(url, { headers: this.headerrs });
  }








}
