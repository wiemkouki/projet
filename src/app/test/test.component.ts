import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
 
  constructor() { }
 
  ngOnInit() {

  }
 
  // onSubmit() {
  //   if (this.editForm.invalid || this.isLoading) {
  //     return;
  //   }
   
  //   this.isLoading = true;
  //   this.userService.updateUser()
  // }

}
