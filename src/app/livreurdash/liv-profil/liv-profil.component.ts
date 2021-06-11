import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LivreurService } from './../../services/livreur.service';
import { Subject } from 'rxjs';

export class Commande {
  constructor(
    public id: number,
    public prix: number,
    public date: Date,
    public quantite: number,
    public status: string,
    public adresse_livraison: string

  ) { }
}
@Component({
  selector: 'app-liv-profil',
  templateUrl: './liv-profil.component.html',
  styleUrls: ['./liv-profil.component.scss']
})
export class LivProfilComponent implements OnInit {
  updateForm: FormGroup;
  
  livs = [];
  dtElement: any;
  isLoggedin: boolean = null;
  form: any = {
    fullname: null,
    tel: null,
    adresse: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private livservice: LivreurService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      tel: ['', Validators.required],
      adresse: ['', Validators.required]
    });

    this.getLiv()


  }

  onSubmit(): void {
    const { fullname, tel, adresse } = this.form;
    let id = localStorage.getItem("id");
    console.log(this.form);
    this.livservice.update(id, fullname, tel, adresse).subscribe(
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




  getLiv() {

    this.http.get('http://localhost:3000/livreur/getAll')
      .subscribe(response => {

        console.log(response);

        this.livs = response as any;


      });

  }
}
