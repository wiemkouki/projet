import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()

export class FileService {
    private headerrs = new HttpHeaders({'Content-Type': 'application/json'});
    constructor(private http:HttpClient){}

    downloadFile(file:String){
        var body = {filename:file};

        return this.http.post('http://localhost:3000/file/download', body, {
            responseType : 'blob',
            headers:new HttpHeaders().append('Content-Type','application/json'),
            withCredentials:true

        });
    }


 


    Save(formData, id)
    {
        const url = `http://localhost:3000/file/upload/${id}`;

        return this.http.post(url, formData, {withCredentials: true  });
      }


}
