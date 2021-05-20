import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent implements OnInit {
  // form: FormGroup;
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
  constructor(private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder, private authService: SocialAuthService) {
    this.form = formBuilder.group({
      'reset_password_code': [''],
      'password': ['', Validators.required],
      'Newpassword': ['', Validators.required],
      'Confirmpassword': ['', Validators.required]
    });


    this.user = new SocialUser();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      authToken: ['', Validators.required],
      id: ['', Validators.required],
      email: ['', Validators.required],
      photoUrl: ['', Validators.required],
      name: ['', Validators.required],
     
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
    
      console.log(this.user);
    });
  }
  password: string
  Newpassword: string
  Confirmpassword: string


  onSubmit(form) {

    console.log(this.Newpassword)
    console.log(this.Confirmpassword)
    this.route.params
      .subscribe(
        (params: Params) => {
          if (this.Newpassword == this.Confirmpassword) {

            localStorage.setItem('id', '1');
            localStorage.getItem('id');

            this.userService.change(localStorage.getItem('id'), { newpassword: this.Newpassword , password: this.password})
              .subscribe(result => {
                this.form.controls['reset_password_code'].setValue(params['code']);
                this.router.navigate(['/profil']);
              });
          } else {
            console.log("passwords does not match !")
          }
        });
  }

}
