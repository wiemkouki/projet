import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
    });
  }
  SignUp(){
    this.userService.signUp(data).subscribe(function(data) {
      console.log(data);
    }); }
}


function data(data: any) {
throw new Error('Function not implemented.');
}




