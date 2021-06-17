import { Component, OnInit } from '@angular/core';
import { BackService } from '../service/back.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-liste-stationabonner',
  templateUrl: './liste-stationabonner.page.html',
  styleUrls: ['./liste-stationabonner.page.scss'],
})
export class ListeStationabonnerPage implements OnInit {
  apiUrl = 'https://stormy-badlands-63440.herokuapp.com';

   /* listeInfos: any;
  idRecu: any;
  listeRecues: any;
  fullName: any;
  phoneNumber: any;
  dateFiltre: any;
  id: any;
  vehiculeName: any;
  heureDebutStr: any;
  vehiculeMatricule: any;
  heureFinStr: any;
  coderecu: any; */
  
  listeTickets: any
  ListRechercheAbonnes: any;
  abonneTempon: any;
  searchValue = null;
  search=true;
  constructor(private BackService: BackService,
    private storage: Storage,
    public http: HttpClient,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.listeticket();
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter")
    this.listeticket();
  }
  doRefresh(event) {

    setTimeout(() => {

      event.target.complete();
    }, 2000);
  }

  recu_stationnabonner(item) {
    localStorage.setItem('recu_stationnabonner', JSON.stringify(item))
    this.navCtrl.navigateRoot('print-abonnnement');
  }

  recherche() {
    if (this.searchValue){
      this.search = false;
      console.log(this.searchValue);
      return this.http.get(this.apiUrl + '/api/tickets-abonnement-rechercher/' + this.searchValue).subscribe(response => {
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
  closeRecherche(){
    if (!this.searchValue || this.searchValue == '') {
     
      this.listeTickets = this.abonneTempon;
    }
  }
  listeticket() {

    // this.BackService.tickets()
    this.BackService.listeAbonnement()
      .subscribe(response => {
        if (response) {
          console.log('-----Liste tickets-----');
          this.listeTickets = response;
          console.log(this.listeTickets)
          /* for (var i = 0; i < this.listeTickets.length; i++) {
            localStorage.setItem('ticket', this.listeTickets[i]['id']);
            this.storage.set('ticket',this.listeTickets[i]['id']);
  
            var ticket = this.listeTickets[i]['id'];
            console.log("ticket unique",ticket)
         
          } */
        }

      })

  }

  /*   createrecu(){
      this.idRecu = localStorage.getItem('ticket');
      return this.http.get(this.apiUrl + '/api/tickets-costum/' +this.idRecu).subscribe(response => {
        if (response) {
          console.log('-----Liste tickets-----');
          this.listeInfos = response;
          console.log(this.listeInfos)
         
         
  
        }
       
      })
    }  */

  /*  createrecu() {
    //localStorage.setItem("position", JSON.stringify(item));
    this.idRecu = localStorage.getItem('ticket');
    return this.http.get(this.apiUrl + '/api/tickets-costum/' + this.idRecu).subscribe(response => {
      if (response) {
        console.log('-----Liste Recues -----');
        this.listeInfos = response;
        console.log(this.listeInfos);

      this.fullName = this.listeInfos.fullName;
       this.phoneNumber = this.listeInfos.phoneNumber;
       this.dateFiltre = this.listeInfos.dateFiltre;
       this.id = this.listeInfos.id;
       this.vehiculeName = this.listeInfos.vehiculeName;
       this.heureDebutStr = this.listeInfos.heureDebutStr;
       this.vehiculeMatricule = this.listeInfos.vehiculeMatricule;
       this.heureFinStr = this.listeInfos.heureFinStr; 

      }

    })
   
 
  } */

}
