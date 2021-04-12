import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';

import { User } from 'backend/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit 
{
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];








  // users: User = {
  //   username: '',
  //   password: '',
  //   role: '',
  //   email: ''
  // };
  // submitted = false;

  constructor(private userService: UserServiceService) 
  {}

  ngOnInit(): void {
  }


































//   saveUser(): void {
//     const data = {
//       username: this.users.username,
//       password: this.users.password,
//       role: this.users.role,
//       email: this.users.email
//     };


//     this.userService.create(data)
//     .subscribe(
//       response => {
//         console.log(response);
//         this.submitted = true;
//       },
//       error => {
//         console.log(error);
//       });
// }

// SignIn(): void {
//     this.submitted = false;
//     this.users = {
//       username: '',
//       password: '',
//       role: '',
//       email:''
//     };
//   }

// }










  }







  // public users: any=[];
  

//   constructor(private userService: UserServiceService) 
//   {
// console.log('welcome');
// this.SignIn();
//  }

//   ngOnInit()
//   {
//     this.userService.showSuccess().subscribe(function(data) {
//       this.users.push(data);
//     });
//   }
   

  
//   SignIn(){
//     this.userService.SignIn(data).subscribe(function(data) {
//       console.log(data);
      
//     }); }
//   }

// function data(data: any) {
//   throw new Error('Function not implemented.');
// }

