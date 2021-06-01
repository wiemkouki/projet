import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Subject } from 'rxjs';

export class Commande {
  constructor(
    public id: number,
    public prix: number,
    public date: Date,
    public quantite: number,
    public status: string,
    public adresse_livraison: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) {}
}

@Component({
  selector: 'app-crud-cmde',
  templateUrl: './crud-cmde.component.html',
  styleUrls: ['./crud-cmde.component.scss']
})
export class CrudCmdeComponent implements OnInit {
  editForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();
 cmdes = [];
 dtElement: any;

 is_deleted: boolean = false;
  deleteID: string;
  editID:string;
  httpClient: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private userService: UserServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }
    this.getCmd()
  }


//Affichage cmdes
getCmd(){
  this.http.get('http://localhost:3000/cmde/getAll')
 .subscribe( response => {
   console.log(response);
   this.cmdes = response as any;
   this.dtTrigger.next();
 });

 }


}
