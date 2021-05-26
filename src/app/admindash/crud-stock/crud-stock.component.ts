
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../../services/product.service';
export class Produit {
  constructor(
    public id: string,
    public libelle: string,
    public marque: string,
    public prix: string,
    public max_rating: string,
    public description: string,
    public is_deleted: boolean,
    public createdAt: string,
    public updatedAt: string) {


     }
}
@Component({
  selector: 'app-crud-stock',
  templateUrl: './crud-stock.component.html',
  styleUrls: ['./crud-stock.component.scss']
})
export class CrudStockComponent implements OnInit {

  editForm: FormGroup;
  closeResult: string;
  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  produits;
  datatable: any;
  editID:string;  deleteId: string;
  dtElement: any;
  is_deleted: boolean = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private modalService: NgbModal, private productService: ProductService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    }
    this.getProduit()


    //edit
    this.editForm = this.fb.group({
      id: [''],
      libelle: [''],
      marque: [''],
      prix: [''],
      max_rating: [''],
      description: [''],

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


// openModal(targetModal, produits) {
//   this.modalService.open(targetModal, {
//    centered: true,
//    backdrop: 'static'
//   });
//   this.editForm.patchValue({

//     libelle:produits.libelle,
//     marque: produits.marque,
//     prix: produits.prix,
//     max_rating:produits.max_rating,
//     disponible: produits.disponible,

//   });
//  }

//  onSubmiT() {
//   console.log(this.editID)
//   this.productService.updateProduct(parseInt(this.editID))
//     .subscribe((response) => {
//       console.log(response);
//       this.produits = response;
//        this.ngOnInit();
//     this.modalService.dismissAll();
// });
//   // console.log("res:", this.editForm.getRawValue());
//  }






  //bouton Delete
  openDelete(targetModal, id: string) {
    this.deleteId = id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete(is_deleted: boolean) {
    console.log(this.deleteId)
    this.productService.deleteProduct(this.deleteId)
      .subscribe((response) => {
        console.log(response);
        this.produits = response;
        is_deleted = true;
  
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
    document.getElementById('id').setAttribute('value', produits.id);
    document.getElementById('libelle').setAttribute('value', produits.libelle);
    document.getElementById('marque').setAttribute('value', produits.marque);
    document.getElementById('prix').setAttribute('value', produits.prix);
    document.getElementById('max_rating').setAttribute('value', produits.max_rating);
    document.getElementById('description').setAttribute('value', produits.description);
    document.getElementById('created').setAttribute('value', produits.createdAt);
    document.getElementById('updated').setAttribute('value', produits.updatedAt);
  }





//edit
  openEdit(targetModal, produits: Produit) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
    });
    this.editForm.patchValue({
      id:produits.id,
      libelle:produits.libelle,
      marque: produits.marque,
      prix: produits.prix,
      max_rating:produits.max_rating,
      description: produits.description,

    });

  }

  onSave() {
    const editURL = 'http://localhost:3000/produit/updateP/' + this.editForm.value.id ;
    console.log(this.editForm.value);
    this.http.put(editURL, this.editForm.value)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


//add
onSubmit(f: NgForm) {
  const url = 'http://localhost:3000/produit/createP';
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
