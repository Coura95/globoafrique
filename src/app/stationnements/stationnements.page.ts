import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stationnements',
  templateUrl: './stationnements.page.html',
  styleUrls: ['./stationnements.page.scss'],
})
export class StationnementsPage implements OnInit {
  apiUrl = 'https://stormy-badlands-63440.herokuapp.com';
  listeTickets: any;
  searchValue= null;
  ListRecherchesStationnements: any;
  stationnementTempon: any;


  constructor(private BackService: BackService,
    public navCtrl: NavController,
    public http: HttpClient,) { }

  ngOnInit() {
    this.listeticket();
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter")
    this.listeticket();
  }

  doRefresh(event) {
   
    setTimeout(() => {
     
      event.target.complete();
    }, 2000);
  }

  recu_stationnement(item){
    localStorage.setItem('recu_stationnement', JSON.stringify(item))
    this.navCtrl.navigateRoot('print-stationnnement');
  } 

 /*  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  } */

  listeticket() {

   // this.BackService.tickets()
    this.BackService.listeStationnement()
    .subscribe(response => {
      if (response) {
        console.log('-----Liste tickets-----');
        this.listeTickets = response;
        console.log(this.listeTickets)
       

      }
     
    })
 
  }
 

  recherche() {
    if (this.searchValue){
     
      console.log(this.searchValue);
      return this.http.get(this.apiUrl + '/api/tickets-stationnement-rechercher/' + this.searchValue).subscribe(response => {
        if (response) {
          console.log('-----Liste Recherche -----');
          this.ListRecherchesStationnements = response;
          console.log(response);
          console.log("recherche 1", this.ListRecherchesStationnements);
          if (this.searchValue !== " ") {
            this.stationnementTempon = this.listeTickets;
            console.log("tem", this.stationnementTempon);
            this.listeTickets = this.ListRecherchesStationnements;

          }
          if (this.searchValue === " ") {
            this.listeTickets = [];
            this.listeTickets = this.stationnementTempon;
            

          }

        }
      })
    }
   
    

  }
}
