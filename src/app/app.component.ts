import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'daijara';
  menuItems: MenuItem[] =[
    {
      label: 'Daijara Basics',
      image: '../assets/DaijaraBasicsIcon.png',
    },
    {
      label: 'Electronique et photo',
      image: '../assets//ElectrinquePhotoIcon.png',
    },
    {
      label: ' Cuisine, Ménage et Salon',
      image: '../assets/cuisineIcon.png',
    },
    {
      label: 'Ordinateur',
      image: '../assets/ordinateurIcon.png',
    },
    {
      label: 'Beauté',
      image: '../assets/BeautyIcon.png',
    },
    {
      label: 'Sports et Loisirs',
      image: '../assets/LoisirsIcon.png',
    },
    {
      label: 'Idées et Cadeau',
      image: '../assets/cadeauIcon.png',
    },
    {
      label: 'Voyage',
      image: '../assets/VoyageIcon.png',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
 