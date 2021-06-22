import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FileService } from '../../services/file.service';
import { UserServiceService } from '../../services/user-service.service';
import * as $ from 'jquery';


export class doc_justificatifs {
  constructor(
    public id: number,
    public libelle: string,
    public url_doc: string,
    public createdAt: string,
    public updatedAt: string,

  ) { }
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


  constructor(private http: HttpClient, private modalService: NgbModal
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



  open(content ,id:number) {

    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}








