import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../services/file.service';
import { UserServiceService } from '../../services/user-service.service';

import {saveAs} from 'file-saver';

export class doc_justificatifs {
  constructor(
    public id: number,
    public libelle: string,
 
    public createdAt: string,
    public updatedAt: string,
  
  ) {} 
}

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


      onDownfile(fileName: Blob) {
        this.userService.downfile(fileName)
          .subscribe((response) => {
            console.log(response);
            this.docs = response as any;
            this.ngOnInit();
          });
        }

        onDownload() {
          this.userService.download()
            .subscribe((response) => {
              console.log(response);
              this.docs = response as any;
              this.ngOnInit();
            });
          }
        

        //   download(filename){
        //     var filename = this.libelle;
    
        //     this._fileService.downloadFile(filename)
        //     .subscribe(
        //         data => saveAs(data, filename),
        //         error => console.error(error)
        //     );
        // }
        
}








