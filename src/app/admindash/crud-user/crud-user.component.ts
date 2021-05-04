import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';

export class User {
 constructor(
    public id: number,
    public email: string,
    public role: string,
    public createdAt: string,
    public updatedAt: string
  ) {} 
}


@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {

editProfileForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 users;
 dtElement: any;
  deleteID: string;
  httpClient: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,
  private userService: UserServiceService
) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      processing: true
  }
  // this.onDelete(user:User)
  this.getUsers()
  
  this.editProfileForm = this.fb.group({
    id: [''],
    email: [''],
    role: [''],
    createdAt: [''],
    updatedAt: ['']
   });
   this.UpdateUsers()

  //  this.onDelete();
}

UpdateUsers(){
  this.http.get('http://localhost:3000/users/updateUser')
 .subscribe( response => {
   console.log(response);
  
 });
}
getUsers(){
  this.http.get('http://localhost:3000/users/getAll')
 .subscribe( response => {
   console.log(response);
   this.users = response;
 });

 }
 openDelete(targetModal, id: string) {
  this.deleteID = id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}

onDelete() {
console.log(this.deleteID)
  this.userService.deleteUser(parseInt(this.deleteID))
    .subscribe((response) => {
      console.log(response);
      this.users = response;
      // this.ngOnInit();
      this.modalService.dismissAll();
    });
}

openModal(targetModal, user) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 
  this.editProfileForm.patchValue({
   email: user.email,
   role: user.role,
  
  });
 }
 onSubmit() {
  this.modalService.dismissAll();
  console.log("res:", this.editProfileForm.getRawValue());
 }


openDetails(targetModal, users: User) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static',
   size: 'lg'
 });
  document.getElementById('email').setAttribute('value', users.email);
  document.getElementById('role').setAttribute('value', users.role);
  document.getElementById('created').setAttribute('value', users.createdAt);
  document.getElementById('updated').setAttribute('value', users.updatedAt);

}

// openEdit(targetModal, users: User) {
//   this.modalService.open(targetModal, {
//     backdrop: 'static',
//     size: 'lg'
//   });
//   this.editForm.patchValue( {
//     id: users.id, 
//     email: users.email,
//     role: users.role,
//     createdAt: users.createdAt,
//     updatedAt: users.updatedAt
//   });
// }

open(content,) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'} ).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
private getDismissReason(reason: any): string {
if (reason === ModalDismissReasons.ESC) {
  return 'by pressing ESC';
} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  return 'by clicking on a backdrop';
} else {
  return  `with: ${reason}`;
}
}

}












