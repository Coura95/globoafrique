import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
image: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
selectedFile(event){
  this.image =event.target.files[0];
}
onClick(){
  const formData = new FormData();
  formData.append('image', this.image);
  this.http.post('http://test.gavision.net/globoafrique/coura',formData).subscribe((response: any)=>{
console.log(response);
  });

}
}
