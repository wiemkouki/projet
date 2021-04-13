import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    const { email, password } = this.form;

    this.userService.login(email, password).subscribe(
      data => {
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/profil'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}





























