import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Subject } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';
export class doc_justificatifs {
  constructor(
    public id: number,
    public libelle: string,
    public url_doc: string,
    public is_valide: Date,

    public createdAt: string,
    public updatedAt: string,

  ) {}
}
@Component({
  selector: 'app-crud-doc',
  templateUrl: './crud-doc.component.html',
  styleUrls: ['./crud-doc.component.scss']
})
export class CrudDocComponent implements OnInit {
 
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};

 docs = [];
 dtElement: any;

  
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal 
    ,private userService: UserServiceService) { }

  ngOnInit(): void {   
     this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 2,
    processing: true
  }
  this.getDoc()
  }

// Affichage docs
getDoc(){
  this.http.get('http://localhost:3000/file/getAll')
 .subscribe( response => {
   console.log(response);
   this.docs = response as any;

 });
}


}








