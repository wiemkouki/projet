import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.scss']
})
export class AdmindashComponent implements OnInit {


  constructor( private router:Router,private route: ActivatedRoute ) { }

  ngOnInit(): void {
  }

showCategorie(){
 this.router.navigate(['/categorie'] , {relativeTo: this.route});
}


}
