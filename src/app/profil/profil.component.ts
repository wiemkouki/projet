import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
 


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
  constructor(private userService: UserServiceService, private router: Router, 
    private authService: SocialAuthService,  private formBuilder: FormBuilder) 
    { 
      this.user = new SocialUser();
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
 
  }


