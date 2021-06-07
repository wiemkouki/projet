import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-livreurdash',
  templateUrl: './livreurdash.component.html',
  styleUrls: ['./livreurdash.component.scss']
})
export class LivreurdashComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    Livreur=>{
      localStorage.setItem("id_liv", Livreur.id);
    }
  }
}
