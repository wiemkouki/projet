import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserServiceService } from './../../../services/user-service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  updateForm: FormGroup;

  isLoggedin: boolean = null;
  form: any = {

    nom_boutique: null,
    tel:null,
    adresse: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
 
  constructor(  private router:Router,
    private formBuilder: FormBuilder,
    private UserService :UserServiceService,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      nom_boutique : ['', Validators.required],
      tel: ['', Validators.required],
      adresse:['', Validators.required]
    });
  }
  onSubmit(): void {
    const { nom_boutique, tel, adresse } = this.form;
    let id = localStorage.getItem("id");
    console.log(this.form);
    this.UserService.updateAdmin(id,nom_boutique, tel, adresse).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
    );
  }
}
