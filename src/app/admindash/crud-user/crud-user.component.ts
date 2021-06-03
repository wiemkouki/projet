import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";  
import { NgxSpinnerModule } from 'ngx-spinner';
export class User {
  constructor(
    public id: number,
    public email: string,
    public role: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,

  ) {}
}


@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {


  editForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
//  dtTrigger: Subject<any> = new Subject<any>();
 users = [];
 dtElement: any;

 is_deleted: boolean = false;
  deleteID: string;
  editID:string;
  httpClient: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private userService: UserServiceService
    ,  
    private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }

    this.getUsers()

    this.editForm = this.fb.group({
      id: [''],
      email: [''],
      role: [''],
      createdAt: [''],
      updatedAt: ['']
    });


}


//Affichage users
getUsers(){
  this.SpinnerService.show();  
  this.http.get('http://localhost:3000/users/getAll')
 .subscribe( response => {

   console.log(response);

   this.users = response as any;
 
  //  this.dtTrigger.next();


 });
 this.SpinnerService.hide();  
 }


//bouton Edit


//bouton Delete
 openDelete(targetModal, id: string) {
  this.deleteID = id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}

onDelete(is_deleted: boolean) {
console.log(this.deleteID)
  this.userService.deleteUser(parseInt(this.deleteID))
    .subscribe((response) => {
      console.log(response);
      this.users = response;
      is_deleted=true;
      // this.show=false;
      // this.ngOnInit();
      this.modalService.dismissAll();

    });
  }




//bouton Details
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

///edit
  openEdit(targetModal, users: User) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id:users.id,
      email:users.email,
      role: users.role
    });

  }

  onSave() {
    const editURL = 'http://localhost:3000/users/updateUser/' + this.editForm.value.id ;
    console.log(this.editForm.value);
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }
open(content) {
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












