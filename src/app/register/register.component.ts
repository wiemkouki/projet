import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
export class User {

  constructor(
    public id: number,
    public email: string,
    public role: string,

    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) { }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  user: SocialUser;
  isLoggedin: boolean = null;
  form: any = {

    email: null,
    role:null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  isSuccessful = false;
  isSignUpFailed = false;
 

  constructor(private userService: UserServiceService,
     private router:Router,
     private formBuilder: FormBuilder,
     private authService: SocialAuthService
     , private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedin = (user != null);
      console.log(this.user);
    });
  }



onSubmit(): void {

  const {  email, password,role } = this.form;



  this.userService.register( email, password, role).subscribe(
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
reloadPage(): void {
  window.location.reload();
}
loginWithFacebook(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // this.router.navigate(['/profil'])
}

signOut(): void {
  this.authService.signOut();
}
loginWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  this.router.navigate(['/profil'])
}

logOut(): void {
  this.authService.signOut();
}

}

