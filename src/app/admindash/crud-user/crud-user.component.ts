import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
export class User {
  constructor(
    // public id: number,
    public email: string,
    public role: string,
    public createdAt: string,
    public updatedAt: string
  ) {
  }
}

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.scss']
})
export class CrudUserComponent implements OnInit {
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 users;
 dtElement: any;
  constructor(private http: HttpClient,private modalService: NgbModal 
) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 4,
      processing: true
  }
  this.getUsers()

}
getUsers(){
  this.http.get('http://localhost:3000/users/getAll')
 .subscribe( response => {
   console.log(response);
   this.users = response;
 });
 }
//  openDelete(targetModal, user: User) {
//   deleteId = user.id;
//   this.modalService.open(targetModal, {
//     backdrop: 'static',
//     size: 'lg'
//   });
// }

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

open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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











