import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
export class User {
  constructor(
    public id: number,
    public email: string,
    public role: string,
    public createdAt: string,
    public updatedAt: string
  ) {
  }
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  selectedUser: User;
  editForm: FormGroup;
  isLoading = false;
  modalService: any;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private userService: UserServiceService, private formBuilder: FormBuilder, private router: Router) { }
 
  ngOnInit() {
 
    this.setForm()
  }
 
  // onSubmit() {
  //   if (this.editForm.invalid || this.isLoading) {
  //     return;
  //   }
   
  //   this.isLoading = true;
  //   this.userService.updateUser()
  // }
 
  get editFormData() { return this.editForm.controls; }
 
  private setForm() {
    console.log(this.selectedUser);
     
    this.editForm = this.formBuilder.group({
      id: [this.selectedUser.id],
    
  
      email: [{ value: this.selectedUser.email, disabled: true }, [Validators.email, Validators.required]],
      role: [this.selectedUser.role, Validators.required],
      createdAt: [this.selectedUser.createdAt, Validators.required],
      updatedAt: [this.selectedUser.updatedAt, Validators.required]
    });
  }
  editItem(user: User) {
    // this.router.navigateByUrl(`EditUser/${userModel.id}`);
  
    const ref = this.modalService.open(TestComponent, { centered: true });
    ref.componentInstance.selectedUser = user;
  
    ref.result.then((yes) => {
      console.log("Yes Click");
  
    },
      (cancel) => {
        console.log("Cancel Click");
  
      })}
}
