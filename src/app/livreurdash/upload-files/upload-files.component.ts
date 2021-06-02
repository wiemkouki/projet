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
export class UploadFilesComponent {
  uploader:FileUploader = new FileUploader({url:uri});

  uploadedFiles: Array < File > ;
  attachmentList:any = [];

  constructor(private http: HttpClient ,private fileService:FileService){

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
//   upload() {
//     let formData = new FormData();
//     for (var i = 0; i < this.uploadedFiles.length; i++) {
//         formData.append("uploadS[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
//     }
//     this.http.post('/upload', formData)
//     .subscribe((response) => {
//          console.log('response received is ', response);
//     })
// }
}
