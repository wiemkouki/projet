import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import  { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LivreurService {
  constructor(private http: HttpClient) { }

  update(id:string, name: string, tel: number, adresse: string): Observable<any> {
    return this.http.put(`http://localhost:3000/livreur/up/${id}`, {
      name,
      tel,
      adresse
    }, httpOptions)

  }
}



