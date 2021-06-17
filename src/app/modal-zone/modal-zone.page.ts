
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
@Component({
  selector: 'app-modal-zone',
  templateUrl: './modal-zone.page.html',
  styleUrls: ['./modal-zone.page.scss'],
})
export class ModalZonePage implements OnInit {
  listeZone: any;
  zone = {choisit: ""}
    ;

  constructor(
    private BackService: BackService ,
    public modalController: ModalController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.selectZone();
  }
  selectZone() {
    var token =localStorage.getItem('token');

    if (token) {
   /* var  request = request.clone({ 
        setHeaders: {        'Authorization': `Bearer ${token}`      }    });
      }*/
    
      this.BackService.zone(token)
      .subscribe(response => {
        if (response) {
          console.log('-----Liste zone');
          this.listeZone = response;
          console.log(this.listeZone )
         
        }
        console.log(this.listeZone )
        })
    }
  }
  onLoadAbonne() {
    console.log("liste");
    this.navCtrl.navigateRoot('newstationnements');
}

onLoadZone(choisit) {
  for (var i = 0; i < this.listeZone.length; i++) {
     if(this.zone.choisit == choisit){
      console.log("zone",this.zone.choisit);
     }   
  }



 // this.navCtrl.navigateRoot('newstationnements');
}
getOptZone(option) {
  return option;
};
  dismissModal() {
   
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
