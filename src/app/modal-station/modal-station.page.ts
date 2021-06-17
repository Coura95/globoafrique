
import { Component, OnInit,  Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
import { NewstationnementsPage } from '../newstationnements/newstationnements.page';
@Component({
  selector: 'app-modal-station',
  templateUrl: './modal-station.page.html',
  styleUrls: ['./modal-station.page.scss'],
})
export class ModalStationPage implements OnInit {
  listeStation: any;
  constructor(
    private BackService: BackService ,
    public modalController: ModalController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
   // this.selectStationnementNormal();
    this.selectStationnementInfraction();
    //this.onLoadVehicule();
  }

  onLoadVehicule() {
    console.log("liste");
    this.navCtrl.navigateRoot('newstationnements');
}

  getOptVehicule(option) {
   
    return option;
  };

  dismissModal() {
   
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  selectStationnementInfraction() {

console.log('-----Liste station infraction');
    this.BackService.station()
      .subscribe(response => {
        if (response) {
         
          this.listeStation = response;
          console.log(this.listeStation)
          for (var i = 0; i < this.listeStation.length; i++) {
            console.log(this.listeStation[i].libelle)
          }
        }
        console.log(this.listeStation)
      })

  }

  selectStationnementNormal() {

    this.BackService.station()
      .subscribe(response => {
        if (response) {
          console.log('-----Liste station normal');
          this.listeStation = response;
          console.log(this.listeStation)
          for (var i = 0; i < this.listeStation.length; i++) {
            console.log(this.listeStation[i].matricule)
          }
        }
        console.log(this.listeStation)
      })

  }

}
