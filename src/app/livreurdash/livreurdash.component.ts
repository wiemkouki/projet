import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-livreurdash',
  templateUrl: './livreurdash.component.html',
  styleUrls: ['./livreurdash.component.scss']
})
export class LivreurdashComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
user=>{
  localStorage.setItem("role", user.user.role);
}
    Livreur => {

      localStorage.setItem("role", Livreur.role);
      localStorage.setItem("id", Livreur.id);
      localStorage.getItem("id");
    }

  }
}
