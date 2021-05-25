import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, GoogleLoginProvider,SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';
export class User {
  constructor(
    public id: number,
    public email: string,
    public role: string,
    public token :string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  user: SocialUser;
  isLoggedin: boolean = null;

  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private userService: UserServiceService, private router: Router,
    private formBuilder: FormBuilder,
    private authService: SocialAuthService
    , private http: HttpClient) {
      console.log(this.isLoggedin)
    }

  ngOnInit(): void { this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.isLoggedin = (user != null);
    console.log(this.user);
  });



  // this.onSave()
  }


  onSubmit(): void {
    const { email, password  } = this.form;

    this.userService.login(email, password).subscribe(
      data => {
        // localStorage.getItem(token.role);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/profil'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
  loginWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['/profil'])
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









  //Inserer email bd
  // onSave(user) {
  //   this.userService.Save(user)
  //     .subscribe(response => {
  //       console.log(response);
  //       this.user = response;
  //       this.ngOnInit();
  //     });

  // }



}





























