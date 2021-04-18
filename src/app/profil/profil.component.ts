import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;
  email:string;
  
  constructor(private userService: UserServiceService ,
    private router: Router,
    private authService: SocialAuthService) {


    }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  }


