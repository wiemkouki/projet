import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';

export class categorie {
  constructor(
    public id: string,
    public nom_cat: string,
    public famille: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,
  
  ) {} 
}

@Component({
  selector: 'app-crud-categorie',
  templateUrl: './crud-categorie.component.html',
  styleUrls: ['./crud-categorie.component.scss']
})
export class CrudCategorieComponent implements OnInit {

  editForm: FormGroup;
  closeResult: string;
  title = 'datatables';
 dtOptions: DataTables.Settings = {};
 categories;
 dtElement: any;

 is_deleted: boolean = false;
  deleteID: string;
  editID:string;
  httpClient: any;
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private userService: UserServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,

      // processing: true
    }

    this.getCategorie()

    this.editForm = this.fb.group({
      id: [''],
      nom_cat: [''],
      famille: [''],
      createdAt: [''],
      updatedAt: ['']
    });

  }




//Affichage users
getCategorie(){
  this.http.get('http://localhost:3000/categorie/getAllC')
 .subscribe( response => {
   console.log(response);
   this.categories = response;
 });

 }


 //bouton Detail
 openDetails(targetModal, categories: categorie) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  document.getElementById('id').setAttribute('value', categories.id);
  document.getElementById('nom_cat').setAttribute('value', categories.nom_cat);
  document.getElementById('famille').setAttribute('value', categories.famille);
  document.getElementById('created').setAttribute('value', categories.createdAt);
  document.getElementById('updated').setAttribute('value', categories.updatedAt);
 
}



// //bouton Delete
// openDelete(targetModal, id: string) {
//   this.deleteId = id;
//   this.modalService.open(targetModal, {
//     backdrop: 'static',
//     size: 'lg'
//   });
// }

// onDelete(is_deleted: boolean) {
//   console.log(this.deleteId)
//   this.productService.deleteProduct(this.deleteId)
//     .subscribe((response) => {
//       console.log(response);
//       this.categories = response;
//       is_deleted = true;
//       // this.ngOnInit();
//       this.modalService.dismissAll();
//     });
// }


//edit
openEdit(targetModal, categories: categorie) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue({
    id:categories.id,
    nom_cat:categories.nom_cat,
    famille: categories.famille,
   
  
  });

}

onSave() {
  const editURL = 'http://localhost:3000/categorie/updateC/' + this.editForm.value.id ;
  console.log(this.editForm.value);
  this.http.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}













//add
onSubmit(f: NgForm) {
  const url = 'http://localhost:3000/categorie/createCat';
  this.http.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
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
      return `with: ${reason}`;
    }
  }












}
