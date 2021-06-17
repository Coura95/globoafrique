import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-liste-stationirregulier',
  templateUrl: './liste-stationirregulier.page.html',
  styleUrls: ['./liste-stationirregulier.page.scss'],
})
export class ListeStationirregulierPage implements OnInit {
  apiUrl = 'https://stormy-badlands-63440.herokuapp.com';
  listeTickets: any;
  searchValue= null;
  ListRechercheAbonnes: any;
  abonneTempon: any;
  
  constructor(
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    private BackService: BackService,
    public navCtrl: NavController,
    public http: HttpClient,
    
  ) { }

  ngOnInit() {
    this.listeticket();
  }
  ionViewWillEnter(){
    console.log("ionViewWillEnter")
    this.listeticket();
  }
  
  

  recherche() {
    if (this.searchValue){
     
      console.log(this.searchValue);
      return this.http.get(this.apiUrl + '/api/tickets-infraction-rechercher/' + this.searchValue).subscribe(response => {
        if (response) {
          console.log('-----Liste Recherche -----');
          this.ListRechercheAbonnes = response;
          console.log(response);
          console.log("recherche 1", this.ListRechercheAbonnes);
          if (this.searchValue !== " ") {
            this.abonneTempon = this.listeTickets;
            console.log("tem", this.abonneTempon);
            this.listeTickets = this.ListRechercheAbonnes;

          }
          if (this.searchValue === " ") {
            this.listeTickets = [];
            this.listeTickets = this.abonneTempon;
            

          }

        }
      })
    }
   
    

  }

  doRefresh(event) {
   
    setTimeout(() => {
     
      event.target.complete();
    }, 2000);
  } 
  recu_stationnabonner1(item){
    localStorage.setItem('recu_infraction', JSON.stringify(item))
    this.navCtrl.navigateRoot('print-infraction');
  } 

  recu_stationnabonner2(item){
    localStorage.setItem('recu_infraction', JSON.stringify(item))
    this.navCtrl.navigateRoot('recu-infraction');
  }
  listeticket() {

   // this.BackService.tickets()
   this.BackService.listeInfraction()
    .subscribe(response => {
      if (response) {
        console.log('-----Liste tickets infraction-----');
        this.listeTickets = response;
        console.log(this.listeTickets)
       

      }
     
    })
 
  }

}
