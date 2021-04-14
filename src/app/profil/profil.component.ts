import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  constructor(private userService: UserServiceService ,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,) {


    }

  ngOnInit(): void {
  }




  }


