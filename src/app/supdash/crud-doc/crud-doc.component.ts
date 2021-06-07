import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../services/file.service';
import { UserServiceService } from '../../services/user-service.service';

// export class doc_justificatifs {
//   constructor(
//     public id: number,
//     public id_livreur: number,
 
//     public createdAt: string,
//     public updatedAt: string,
  
//   ) {} 
// }

@Component({
  selector: 'app-crud-doc',
  templateUrl: './crud-doc.component.html',
  styleUrls: ['./crud-doc.component.scss']
})
export class CrudDocComponent implements OnInit {
  closeResult: string;
  title = 'datatables';

  dtOptions: DataTables.Settings = {};
  docs = [];
  livs = [];
  dtElement: any;


  constructor( private http: HttpClient, private modalService: NgbModal
    , private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      processing: true
    }
    this.getDoc();
    this.getLiv();
  }
  getLiv() {
    this.http.get('http://localhost:3000/livreur/getAll')
      .subscribe(response => {
        console.log(response);
       
        this.livs = response as any;
      });
  }

  // Affichage docs
  getDoc() {
    this.http.get('http://localhost:3000/file/getAll')
      .subscribe(response => {
        console.log(response);
        this.docs = response as any;
       
      });
  }

  onValid(id: number) {
      this.userService.valid(id)
        .subscribe((response) => {
          console.log(response);
          this.docs = response as any;
          this.ngOnInit();
        });
      }
    
}








