import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { FileService } from '../../services/file.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver-es';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UserServiceService } from '../../services/user-service.service';

export class doc_justificatifs {
  constructor(
    public id: number,
    public libelle: string,
 
    public createdAt: string,
    public updatedAt: string,
  
  ) {} 
}

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  providers:[FileService]
})
export class UploadFilesComponent implements OnInit
{
  closeResult: string;
  title = 'datatables';

  dtOptions: DataTables.Settings = {};
  docs = [];
  dtElement: any;

  is_deleted: boolean = false;
  deleteID: string;
  uploader:FileUploader;

  uploadedFiles: Array < File > ;
  attachmentList:any = [];

  constructor(private http: HttpClient 
    ,private fileService:FileService
    ,private userService: UserServiceService
    ,private modalService: NgbModal ){}

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
  fileUpload(files)
  {
    let file = files[0];

    let formData = new FormData();

    formData.append("file", file);

    let id = localStorage.getItem("id");

    this.fileService.Save(formData, id).subscribe(data => console.log(data));
  }

download(index){
  var filename = this.attachmentList[index].uploadname;

  this.fileService.downloadFile(filename)
  .subscribe(
      data => saveAs(data, filename),
      error => console.error(error)
  );
}
//bouton Delete
openDelete(targetModal, id: string) {
  this.deleteID = id;
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
}

onDelete(id: string) {
  console.log( this.deleteID);
  this.userService.deleteDoc( this.deleteID)
    .subscribe((response) => {
      console.log(response);
      this.docs = response;
      this.modalService.dismissAll();

    });
  }
}
