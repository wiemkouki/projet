import { Injectable } from '@angular/core';

import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from  '@angular/common/http';  
import { map } from  'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {
  SERVER_URL: string = "http://localhost:3000";  
  // private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }



  public upload(formData) {

    return this.http.post<any>(this.SERVER_URL, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }
}
