import { Component, OnInit } from '@angular/core';
export class Livreur {

  constructor(
    public id: number,

  ) { }
}
@Component({
  selector: 'app-livreurdash',
  templateUrl: './livreurdash.component.html',
  styleUrls: ['./livreurdash.component.scss']
})
export class LivreurdashComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    // localStorage.setItem("id", Livreur.id);
  }

}
