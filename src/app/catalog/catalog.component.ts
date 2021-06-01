
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
  products: Produit[];
  constructor(private fb: FormBuilder, private http: HttpClient,private productService: ProductService) {  
  //   this.products = [
  //   new Produit(
  //     'MYSHOES',
  //     'Black Running Shoes',
  //     '/assets/img/nike.jpeg',
  //      'Runings',
  //     109.99
  //   ),
  //   new Produit(
  //     'BAT',
  //     'A Nice Black Hat',
  //     '/assets/img/Bat.jpg',
  //   'bat',
  //     29.99
  //   ),
  //   new Produit(
  //     'NICHET',
  //     'A Nice Black Hat',
  //     "https://blueskytechmage.com/ayo/media/catalog/product/cache/21adbbfa8c2a8f065580bb2a26fbd5d4/2/-/2-1_1.jpg",
  //  'Hats',
  //     29.99
  //   ),
  //   new Produit(
  //     'NICHET',
  //     'A Nice Black Hat',
  //     "https://blueskytechmage.com/ayo/media/catalog/product/cache/21adbbfa8c2a8f065580bb2a26fbd5d4/2/-/2-1_1.jpg",
  //  'Hats',
  //     29.99
  //   ),
  //   new Produit(
  //     'NICHET',
  //     'A Nice Black Hat',
  //     'http://bestjquery.com/tutorial/product-grid/demo9/images/img-4.jpg',
  //  'Hats',
  //     29.99
  //   )
  // ];
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
