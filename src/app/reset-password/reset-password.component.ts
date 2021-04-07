import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import  { Observable } from 'rxjs';
import { any } from 'sequelize/types/lib/operators';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
    });
  }
  ResetPwd(){
    this.userService.ResetPwd(data).subscribe(function(data) {
      console.log(data);
    }); }
}


function data(data: any) {
throw new Error('Function not implemented.');
}



