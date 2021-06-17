import { Component, OnInit } from '@angular/core';
import { Printer } from '@ionic-native/printer/ngx';
import { HttpClient } from '@angular/common/http';
import { BackService } from '../service/back.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-print-stationnnement',
  templateUrl: './print-stationnnement.page.html',
  styleUrls: ['./print-stationnnement.page.scss'],
})
export class PrintStationnnementPage implements OnInit {


  apiUrl = 'https://stormy-badlands-63440.herokuapp.com';

  montantTotal: number;
  listeInfos: any;
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
  coderecu: any;
  matricule: any;
  montant: any;
  recu_stationnement: any
  constructor(
    private printer: Printer,
    private storage: Storage,
    public http: HttpClient,
    private BackService: BackService,
  ) {


  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter")
    this.listeRecu();
    this.createrecu();
  }


  listeRecu() {

    this.BackService. listeStationnement()
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
    this.recu_stationnement = JSON.parse(localStorage.getItem("recu_stationnement"));
    console.log("this.recu", this.recu_stationnement);
    this.idRecu = localStorage.getItem('ticket');
    return this.http.get(this.apiUrl + '/api/tickets-costum/' + this.recu_stationnement.id).subscribe(response => {
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
        this.matricule = this.listeInfos.matricule;
        this.montant = this.listeInfos.montant;

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
