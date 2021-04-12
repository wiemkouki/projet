import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('');
  usernametest: string
  form: any = {
    username: null,
    email: null,
    role:null,
    password: null
  };
  isSuccessful = true;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    // this.userService.showSuccess().subscribe(function(data) {
    //   // this.products.push(data);
    // });
  }
//   SignUp(){
//     this.userService.signUp(data).subscribe(function(data) {
//       console.log(data);
//     }); }
// }


// function data(data: any) {
// throw new Error('Function not implemented.');
// }


onSubmit(): void {
  console.log(this.usernametest)
  const { username, email, password,role } = this.form;

 /* this.userService.register(username, role,email, password).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  );*/
}
}

