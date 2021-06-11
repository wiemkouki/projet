import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Subject } from 'rxjs';
export class Livreur {
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
  selector: 'app-notif-liv',
  templateUrl: './notif-liv.component.html',
  styleUrls: ['./notif-liv.component.scss']
})
export class NotifLivComponent implements OnInit {
  editForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();
 livs = [];
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
    this.getListliv()
  }
//Affichage cmdes
getListliv(){
  
  this.http.get('http://localhost:3000/livreur/getAll')
 .subscribe( response => {
   console.log(response);
   this.livs = response as any;
   this.dtTrigger.next();
 });
  }
 }

