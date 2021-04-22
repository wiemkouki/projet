import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent implements OnInit {

   title = 'datatables';
  dtOptions: DataTables.Settings = {};
  users;
   
  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
   
    this.http.get('http://localhost:3000/users/getAll')
      .subscribe(users => {
        this.users = users;
    });
   
  }
   
}