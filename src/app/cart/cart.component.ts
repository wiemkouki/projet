import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../services/user-service.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";  
import { NgxSpinnerModule } from 'ngx-spinner';
export class Produit {

  constructor(
    public id: number,
    public libelle: string,
    public prix: number,

    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) { }
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartForm: FormGroup;
  form: any = {

    id: null,
    libelle:null,
    prix: null
  };
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  pdt = [];
  dtElement: any;
  constructor(
    private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private userService: UserServiceService
    ,  
    private SpinnerService: NgxSpinnerService,
    private formBuilder: FormBuilder,
 ) { }

  ngOnInit(): void {
    this.cartForm = this.formBuilder.group({
      id: ['', Validators.required],
      libelle: ['', Validators.required],
      prix: ['', Validators.required]
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }
    this.getPdt()
  }

//Affichage users
getPdt(){
  this.SpinnerService.show();  
  this.http.get('http://localhost:3000/produit/getAll')
 .subscribe( response => {

   console.log(response);

   this.pdt = response as any;
 



 });
}
}