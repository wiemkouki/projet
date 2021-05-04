import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-changepwd',
  templateUrl: './changepwd.component.html',
  styleUrls: ['./changepwd.component.scss']
})
export class ChangepwdComponent implements OnInit {
  form: FormGroup;

  constructor(private userService: UserServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) {
    this.form = formBuilder.group({
      'reset_password_code': [''],
      'password': ['', Validators.required],
      'Newpassword': ['', Validators.required],
      'Confirmpassword': ['', Validators.required]
    });
  }

  ngOnInit(): void {
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

            localStorage.setItem('id', '4');
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
