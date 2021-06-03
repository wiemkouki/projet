import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supdash',
  templateUrl: './supdash.component.html',
  styleUrls: ['./supdash.component.scss']
})
export class SupdashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    user=>{
      localStorage.setItem("role", user.user.role);
    }
  }

}
