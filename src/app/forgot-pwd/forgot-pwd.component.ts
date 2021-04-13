import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  form: FormGroup;
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
  resetpwd:string
  onSubmit(form) {
    console.log(this.resetpwd)
    this.route.params
      .subscribe(
        (params: Params) => {
          this.userService.forgot({ id: params.id, password: this.resetpwd })
            .subscribe(result => {
              this.form.controls['reset_password_code'].setValue(params['code']);
              this.router.navigate(['/login']);
            });

        });
  }


  //


}





