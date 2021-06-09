import { Component, OnInit } from '@angular/core';
import { FileUploader} from 'ng2-file-upload';
import { FileService } from '../../services/file.service';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver-es';

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

  uploader:FileUploader;

  uploadedFiles: Array < File > ;
  attachmentList:any = [];

  constructor(private http: HttpClient ,private fileService:FileService){}

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

    let id = localStorage.getItem("id_liv");

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
// openDelete(targetModal, id: string) {
//   this.deleteID = id;
//   this.modalService.open(targetModal, {
//     backdrop: 'static',
//     size: 'lg'
//   });
// }

// onDelete(is_deleted: boolean) {
// console.log(this.deleteID)
//   this.userService.deleteUser(parseInt(this.deleteID))
//     .subscribe((response) => {
//       console.log(response);
//       this.users = response;
//       is_deleted=true;
  
//       this.modalService.dismissAll();

//     });
//   }
}
