import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  public users: any=[];
  

  constructor(private userService: UserServiceService) 
  {
console.log('welcome');
this.SignIn();
 }

  ngOnInit()
  {
    this.userService.showSuccess().subscribe(function(data) {
      this.users.push(data);
    });
  }
   
  
  SignIn(){
    this.userService.SignIn(data).subscribe(function(data) {
      console.log(data);
      
    }); }
  }

function data(data: any) {
  throw new Error('Function not implemented.');
}

