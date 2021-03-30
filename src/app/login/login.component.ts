import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  // public products: any=[];
  

  constructor(private userService: UserServiceService) 
  {
    
  }

  ngOnInit()
  {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
    });
  }

}
