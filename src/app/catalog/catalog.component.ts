
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
export class Produit {
  constructor(
    public id: string,
    public libelle: string,
    public marque: string,
     public image: string,
    public prix: number,

   ) 
    {}
}
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  // produits;
  products:[];
  constructor(private fb: FormBuilder, private http: HttpClient,private productService: ProductService) {  
 
}

  ngOnInit(): void {
    this.getProduit()
  }
//  Affichage produits
 getProduit() {
  this.http.get('http://localhost:3000/produit/getAll')
    .subscribe(response => {
      console.log(response);
     this.products = response as any;
    });
}

}
