import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  liste: any;

  constructor(private http:HttpClient) { 
  //http://test.gavision.net/globoafrique/coura_db.php?id=1234
  }

  ngOnInit() {
    this.listeOfAllJob();
    //this.sendPostRequest();
  }
 listejob(){
   return this.http.get('https://cors-anywhere.herokuapp.com/http://test.gavision.net/globoafrique/coura_db.php?id=1234');
 }


 listeOfAllJob() {
  console.log('-----Liste job-----');
  this.listejob()
  .subscribe(response => {
     
     this.liste = response;
      console.log(this.liste)
 })
}

// sendPostRequest() {
//   var headers = new Headers();
//   headers.append("Accept", 'text/plain');
//   headers.append('Content-Type', 'text/plain' );
//   // let requestOptions = new RequestOptions({ headers: headers });

//   // let postData = {
//   //         "name": "Customer004",
//   //         "email": "customer004@email.com",
//   //         "tel": "0000252525"
//   // }

//   this.http.get("http://test.gavision.net/globoafrique/coura_db.php?id=1234")
//     .subscribe(data => {
//       console.log(data['_body']);
//      }, error => {
//       console.log(error);
//     });
// }

}