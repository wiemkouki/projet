import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";  
import { NgxSpinnerModule } from 'ngx-spinner';

export class Commande {
  constructor(
    public id: number,
    public prix: number,
    public date: Date,
    public quantite: number,
    public status: string,
    public adresse_livraison: string
  
  ) {}
}

@Component({
  selector: 'app-cmde',
  templateUrl: './cmde.component.html',
  styleUrls: ['./cmde.component.scss']
})
export class CmdeComponent implements OnInit {
  editForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 dtTrigger: Subject<any> = new Subject<any>();
cmds = [];
 dtElement: any;

 is_deleted: boolean = false;
  deleteID: string;
  editID:string;
  httpClient: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private userService: UserServiceService
,  private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }

    this.getCmd()

  }
//Affichage users
getCmd(){

  this.http.get('http://localhost:3000/cmde/getAll')
 .subscribe( response => {

   console.log(response);

   this.cmds = response as any;
 
   this.dtTrigger.next();
 });

 }
}
