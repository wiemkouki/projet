import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
    });
  }
  Forgotpwd(){
    this.userService.forgotPwd(data).subscribe(function(data) {
      console.log(data);
    }); }
}




function data(data: any) {
throw new Error('Function not implemented.');
}

