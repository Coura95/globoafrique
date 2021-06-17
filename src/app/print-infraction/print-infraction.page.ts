import { Component, OnInit } from '@angular/core';
import { Printer } from '@ionic-native/printer/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { BackService } from '../service/back.service';

@Component({
  selector: 'app-print-infraction',
  templateUrl: './print-infraction.page.html',
  styleUrls: ['./print-infraction.page.scss'],
})
export class PrintInfractionPage implements OnInit {
  apiUrl = 'https://stormy-badlands-63440.herokuapp.com';

  montantTotal: number;
  listeInfos: any;
  idRecu_infraction: any;
  listeRecues: any;
  fullName: any;
  phoneNumber: any;
  dateFiltre: any;
  id: any;
  vehiculeName: any;
  heureDebutStr: any;
  vehiculeMatricule: any;
  heureFinStr: any;
  coderecu: any;
  recu_infraction: any;
  categorieVehiculeName: any;
  matricule: any;
  montant: any;
  stationnementName: any;
 


  constructor( private printer: Printer,
    private storage: Storage,
    public http: HttpClient,
    private BackService: BackService,) { }

  ngOnInit() {
   // this.listeRecu();
   // this.createrecu();
  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter")
    this.listeRecu();
    this.createrecu();
  }
   listeRecu() {

    this.BackService.listeAbonnement()
      .subscribe(response => {
        if (response) {
          console.log('-----Liste Tickets-----');
          this.listeRecues = response;
          console.log(this.listeRecues)
          /*   for (var i = 0; i < this.listeRecues.length; i++) {
             localStorage.setItem('ticket', this.listeRecues[i]['id']);
             this.storage.set('ticket',this.listeRecues[i]['id']);
   
             this.coderecu = this.listeRecues[i]['id'];
             console.log("recu unique",this.coderecu)
              return this.http.get(this.apiUrl + '/api/tickets-costum/' + this.listeRecues[i].id).subscribe(response => {
               if (response) {
                 console.log('-----Liste Recues -----');
                 this.listeInfos = response;
                 console.log(this.listeInfos);
                 this.fullName= this.listeInfos.fullName;
                this.phoneNumber= this.listeInfos.phoneNumber;
                this.dateFiltre= this.listeInfos.dateFiltre;
                this.id= this.listeInfos.id;
                this.vehiculeName= this.listeInfos.vehiculeName;
                this.heureDebutStr= this.listeInfos.heureDebutStr;
                this.vehiculeMatricule= this.listeInfos.vehiculeMatricule;
                this.heureFinStr= this.listeInfos.heureFinStr; 
         
               }
             }) 
          
           } */
        }

      })

  }
  createrecu() {
    this.recu_infraction = JSON.parse(localStorage.getItem("recu_infraction"));
    console.log("this.recu", this.recu_infraction);

    this.idRecu_infraction = localStorage.getItem('ticket_infraction');
    return this.http.get(this.apiUrl + '/api/tickets-costum/' + this.recu_infraction.id).subscribe(response => {
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
        this.categorieVehiculeName  = this.listeInfos.categorieVehiculeName;
        this.matricule = this.listeInfos.matricule;
        this.montant = this.listeInfos.montant;
        this.stationnementName = this.listeInfos.stationnementName;
        this.dateFiltre = this.listeInfos.dateFiltre;

      }

    })


  }
  testPrint = function () {

    console.log("impression");
    var sTable = document.getElementById('tab').innerHTML;
    var t =  sTable;
    this.printer.print(
      t
    );

  }
}
