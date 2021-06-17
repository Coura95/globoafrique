import { Component, OnInit } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { BackService } from '../service/back.service';

@Component({
  selector: 'app-print-abonnnement',
  templateUrl: './print-abonnnement.page.html',
  styleUrls: ['./print-abonnnement.page.scss'],
})
export class PrintAbonnnementPage implements OnInit {
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
  recu_stationnabonner: any
  constructor(
    private printer: Printer,
    private storage: Storage,
    public http: HttpClient,
    private BackService: BackService,
  ) {


  }

  ngOnInit() {
    // this.testPrint();
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
    this.recu_stationnabonner = JSON.parse(localStorage.getItem("recu_stationnabonner"));
    console.log("this.recu", this.recu_stationnabonner);
    this.idRecu = localStorage.getItem('ticket');
    return this.http.get(this.apiUrl + '/api/tickets-costum/' + this.recu_stationnabonner.id).subscribe(response => {
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


  }
  testPrint = function () {

    console.log("impression");
    var sTable = document.getElementById('tab').innerHTML;
    var t = sTable;
    this.printer.print(t);

  }

  testPrints = function () {

    console.log("impression");
    var image = '<div style="text-align: right">' +

      '</div>'
    '<div style="text-align: right">' +
      '<h1></h1>' +
      '</div>'
      ;

    var enteteComm = '' +
      '<div class="row">' +
      '<div class="col">' +
      ' </div>'
    '</div>';

    var nomclient = "AG45FR";

    var enteteCli = '<div class="row">' +
      '<div class="col">' +
      ' Identifiant: ' +
      nomclient +
      ' </div>'
    '</div>';

    var telUser = '<div class="row">' +
      '<div class="col">' +
      ' Telephone: ' +
      "789996644" +
      ' </div>'
    '</div>';


    var details = '<table style="width: 100px">' +
      '<tr>' +
      '<th><i class="icon ion-calendar"></i><i class="icon ion-cash"></i></th>' +
      '<th>12: 45</th>' +
      '<th></th>' +
      '<th></th>' +
      '</tr>';
    var corps = '';

    corps = corps +
      '<td>' + + '</td>' +
      '<td>' + "DK342R" + '</td>' +
      '<td>' + "14: 45" + '</td>' +
      '<td><i class="icon ion-calendar"></i><i class="icon ion-cash"></i></td>';





    details = details + '<tr style="text-align: center">' + corps + '</tr></table>';
    var sTable = document.getElementById('tab').innerHTML;
    var footer = '<h3 style="margin-top:50px;"><label style="text-align:center"></label></h3></br><p>--------------------------</p>';
    var titleDetail = '<p>--------------------------</p></br><h2>Details Stationnement</h2></br><h2>22/12/2021</h2></br><p>--------------------------</p>';
    var t = image +
      enteteComm + telUser + enteteCli + titleDetail + sTable + footer;
    this.printer.print(
      t
    );

  }

}
