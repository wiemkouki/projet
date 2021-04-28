import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  form: any = {
    email:null
  }
  errorMessage = '';


  constructor( private router:Router , private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit(): void {
    // this.userService.showSuccess().subscribe(function(data) {
    //   // this.products.push(data);
    //   this.route.queryParams.subscribe(params => {
    //     this.name = params['name'];
    //   });
    // });

  }
 onSubmit(): void {

    const { email } = this.form;

    this.userService.reset(email).subscribe(
      data => {
    }),
    err => {
      this.errorMessage = err.error.message;

    }
   }
}






