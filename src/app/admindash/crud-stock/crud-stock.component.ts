
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserServiceService } from '../../services/user-service.service';
export class Produit {
  constructor(
    public id: number,
    public libelle: string,
    public marque: string,
    public prix: string,
    public max_rating: string,
    public disponible: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string) { }
}
@Component({
  selector: 'app-crud-stock',
  templateUrl: './crud-stock.component.html',
  styleUrls: ['./crud-stock.component.scss']
})
export class CrudStockComponent implements OnInit {
  
  editProfileForm: FormGroup;
  closeResult: string;
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  produits;
  datatable: any;
  editID:string;
  dtElement: any;
  is_deleted: boolean = false;
  deleteID: string;
  constructor(private fb: FormBuilder, private http: HttpClient, private modalService: NgbModal, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
    this.getProduit()


    //edit
    this.editProfileForm = this.fb.group({
      libelle: [''],
      marque: [''],
      max_rating: [''],
      disponible: [''],
     
    });
  }


  //Affichage produits
  getProduit() {
    this.http.get('http://localhost:3000/produit/getAll')
      .subscribe(response => {
        console.log(response);
        this.produits = response;
      });
  }


//bouton Edit


openModal(targetModal, produits) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
  this.editProfileForm.patchValue({
    libelle:produits.libelle,
    marque: produits.marque,
    prix: produits.prix,
    max_rating:produits.max_rating,
    disponible: produits.disponible,
  
  });
 }
 
//  onSubmit() {
  // console.log(this.editID)
//   this.userService.updateProduct()
//     .subscribe((response) => {
//       console.log(response);
//       this.produits = response;
//        this.ngOnInit();
//     this.modalService.dismissAll();
// });
//   console.log("res:", this.editProfileForm.getRawValue());
//  }






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
    this.userService.deleteProduct(parseInt(this.deleteID))
      .subscribe((response) => {
        console.log(response);
        this.produits = response;
        is_deleted = true;
        // this.ngOnInit();
        this.modalService.dismissAll();

      });
  }







  //bouton Detail
  openDetails(targetModal, produits: Produit) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
   
    document.getElementById('libelle').setAttribute('value', produits.libelle);
    document.getElementById('marque').setAttribute('value', produits.marque);
    document.getElementById('prix').setAttribute('value', produits.prix);
    document.getElementById('max_rating').setAttribute('value', produits.max_rating);
    document.getElementById('disponible').setAttribute('value', produits.disponible);
    document.getElementById('created').setAttribute('value', produits.createdAt);
    document.getElementById('updated').setAttribute('value', produits.updatedAt);
  }








  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
