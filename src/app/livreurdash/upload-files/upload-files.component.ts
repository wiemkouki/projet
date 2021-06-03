import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { FileService } from '../../services/file.service';
// import {saveAs} from 'file-saver';
import { saveAs } from 'file-saver-es';

// var md5 = require('md5');
 let fd = new FormData();
const uri = 'http://localhost:3000/file/upload';
@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
  providers:[FileService]
})
export class UploadFilesComponent {
  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

  constructor(private fileService:FileService){

    this.uploader.onCompleteItem = (item:any, response:any , status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response));
  }
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