import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  form: FormGroup;
  errorMessage = '';

  constructor(private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'reset_password_code': [''],
      'password': ['', Validators.required],
      'password_confirmation': ['', Validators.required]
    });
  }

  ngOnInit(): void {
}


  password: string
  confirmPassword: string
  onSubmit(form) {
    console.log(this.password)
    console.log(this.confirmPassword)
    this.route.params
      .subscribe(
        (params: Params) => {
          if (this.password == this.confirmPassword)
          {
            console.log(params);
            this.userService.forgot({ id: params.params.id, password: this.password })
              .subscribe(result => {
                this.form.controls['reset_password_code'].setValue(params['code']);
                this.router.navigate(['/login']);
              });
          }else{
            console.log("passwords does not match !")
          }



        });
  }


  //


}





