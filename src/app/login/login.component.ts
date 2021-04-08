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
  public products: any=[];
  

  constructor(private userService: UserServiceService) 
  {}

  ngOnInit()
  {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
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

