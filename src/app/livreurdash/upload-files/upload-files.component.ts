import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../services/file.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { saveAs } from 'file-saver-es';

 let fd = new FormData();
const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  providers:[FileService]
})
export class UploadFilesComponent
{
  uploader:FileUploader;

  uploadedFiles: Array < File > ;
  attachmentList:any = [];

  constructor(private http: HttpClient ,private fileService:FileService)
  {

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
}
