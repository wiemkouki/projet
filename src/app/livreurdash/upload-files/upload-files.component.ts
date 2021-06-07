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
  uploader:FileUploader;

  uploadedFiles: Array < File > ;
  attachmentList:any = [];

  constructor(private http: HttpClient ,private fileService:FileService){}

  ngOnInit(): void {}

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
}
