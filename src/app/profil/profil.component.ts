import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  form1: any = {

    password: null,
    Currentpassword:null,
    Newpasswordd:null,
    Newpassword:null

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserServiceService ,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) {

      this.form1 = formBuilder.group({
        'reset_password_code': [''],
        'Newpassword': ['', Validators.required],
        'Newpasswordd': ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }
  Currentpassword:string
  Newpasswordd:string
  Newpassword:string



  onSubmit(form1): void {

    const { Newpassword } = this.form1;
    this.userService.change(Newpassword).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/profil'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSuccessful = false;
        this.isSignUpFailed = true;
      }
    );
  }
  }


