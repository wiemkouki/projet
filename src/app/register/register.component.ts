import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  form: any = {

    email: null,
    role:null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private userService: UserServiceService, private router:Router) { }

  ngOnInit(): void {

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
}

