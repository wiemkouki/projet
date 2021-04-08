import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor( private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.showSuccess().subscribe(function(data) {
      // this.products.push(data);
      this.route.queryParams.subscribe(params => {
        this.name = params['name'];
      });
    });
  }
  ResetPwd(){
    this.userService.ResetPwd(data).subscribe(function(data) {
      console.log(data);
      this.router.navigate(['/forgotpwd '], { queryParams: { id:'/:id' } });
    }); }
}


function data(data: any) {
throw new Error('Function not implemented.');
}



