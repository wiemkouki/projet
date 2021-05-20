import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../../../services/categorie.service';
export class Sous_cat {
  constructor(
    public id: string,
    public nom_ss_cat: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string,
  
  ) {} 
}
@Component({
  selector: 'app-crud-sscat',
  templateUrl: './crud-sscat.component.html',
  styleUrls: ['./crud-sscat.component.scss']
})
export class CrudSScatComponent implements OnInit {
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
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal ,private categorieService: CategorieService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,

      // processing: true
    }
    this.getssCategorie()

    this.editForm = this.fb.group({
      id: [''],
      nom_ss_cat: [''],
      createdAt: [''],
      updatedAt: ['']
    });


  }


//Affichage users
getssCategorie(){
  this.http.get('http://localhost:3000/sous_cat/getAll')
 .subscribe( response => {
   console.log(response);
   this.categories = response;
 });

 }

 //bouton Detail
 openDetails(targetModal, categories: Sous_cat) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  document.getElementById('id').setAttribute('value', categories.id);
  document.getElementById('nom_ss_cat').setAttribute('value', categories.nom_ss_cat);
  document.getElementById('created').setAttribute('value', categories.createdAt);
  document.getElementById('updated').setAttribute('value', categories.updatedAt);
 
}



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
  this.categorieService.deletessCat(this.deleteID)
    .subscribe((response) => {
      console.log(response);
      this.categories = response;
      is_deleted = true;
      // this.ngOnInit();
      this.modalService.dismissAll();
    });
}


//edit
openEdit(targetModal, categories: Sous_cat) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue({
    id:categories.id,
    nom_ss_cat:categories.nom_ss_cat
  });

}

onSave() {
  const editURL = 'http://localhost:3000/sous_cat/update/' + this.editForm.value.id ;
  console.log(this.editForm.value);
  this.http.put(editURL, this.editForm.value)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}


//add
onSubmit(f: NgForm) {
  const url = 'http://localhost:3000/sous_cat/create';
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
