import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { Client } from '../_models/client';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
 client: Client;
  user: SocialUser;
  loginForm: FormGroup;
  form: any = {
    authToken:null,
    id:null,
    email: null,
    photoUrl: null,
    name: null,
    firstname: null
  };
  constructor(private activatedRoute : ActivatedRoute, private userService: UserServiceService, private router: Router,
    private authService: SocialAuthService,  private formBuilder: FormBuilder, private http: HttpClient)
    {
      this.user = new SocialUser();
      // this.client = new Client();
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      authToken: ['', Validators.required],
      id: ['', Validators.required],
      email: ['', Validators.required],
      photoUrl: ['', Validators.required],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;

      console.log(this.user);
    });
  }

  //  this.activatedRoute.paramMap.subscribe(
  //     (p: ParamMap) => {
  //       this.userService.getClient(p.get('id')).subscribe(
  //         (client : Client) => {
  //           this.client = client;
  //         },
  //         (error) => {
  //           console.log("Error with getClient");
  //         }
  //       )
  //     },

  //     (error) => {
  //       console.log("Error with paramMap");
  //     }
  //   )
  // }
  //afficher user
// getClient(id){
//   this.http.get(`http://localhost:3000/client/getClient/${id}`)
//  .subscribe( response => {
//    console.log(response);
//    this.client = response as any;

//  });

//  }

  }


