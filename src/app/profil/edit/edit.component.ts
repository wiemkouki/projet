import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
 editForm: FormGroup;
  isLoggedin: boolean = null;

  form: any = {
   name: null,
    tel: null,
    adresse: null,
   avatar: null,
  };

  errorMessage = '';
  roles: string[] = [];
  constructor(private userService: UserServiceService, private router: Router,
    private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: ['', Validators.required],
      tel: ['', Validators.required],
      adresse: ['', Validators.required],
      avatar: ['', Validators.required]
  });

}
}
