import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  }
 listejob(){
   return this.http.get('http://test.gavision.net/globoafrique/coura_db.php?id=1234');
 }


 listeOfAllJob() {
  this.listejob()
  .subscribe(response => {
      console.log('-----Liste job-----');
     this.liste = response;
      console.log(this.liste)
 })
}

}