import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.scss']
})
export class ForgotPwdComponent implements OnInit {
  credentials: FormGroup;



  constructor(private userService: UserServiceService,
    private router:Router ,
     private route: ActivatedRoute,
      private formBuilder: FormBuilder) {     this.credentials = formBuilder.group({
        'reset_password_code': [''],
        'password': ['', Validators.required],
        'password_confirmation': ['', Validators.required]
      });}

  ngOnInit(): void {
    // this.userService.showSuccess().subscribe(function(data) {
    //   // this.products.push(data);
    // });
    this.route.params
    .subscribe((params: Params) => {
      this.credentials.controls['reset_password_code'].setValue(params['code']);
    });

    this.route.params.subscribe(data => console.log(data.id))

    console.log(this.route.params)
  }
  
  onSubmit({value, valid}: {value:object, valid: boolean}) {
    this.userService.forgot(value)
      .subscribe(result => {
        this.router.navigate(['/login']);
      });
  }





}





