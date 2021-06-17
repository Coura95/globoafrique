import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
@Component({
  selector: 'app-modal-abonne',
  templateUrl: './modal-abonne.page.html',
  styleUrls: ['./modal-abonne.page.scss'],
})
export class ModalAbonnePage implements OnInit {
  listeAbonne: any;

  constructor(
    private BackService: BackService ,
    public modalController: ModalController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.selectAbonne();
  }
  selectAbonne() {
    var token =localStorage.getItem('token');

    if (token) {
   /* var  request = request.clone({ 
        setHeaders: {        'Authorization': `Bearer ${token}`      }    });
      }*/
    
      this.BackService.abonne(token)
      .subscribe(response => {
        if (response) {
          console.log('-----Liste abonne');
          this.listeAbonne = response;
          console.log(this.listeAbonne )
          for (var i = 0; i < this.listeAbonne.length; i++) {
          console.log(this.listeAbonne[i].matricule )
        }
        }
        console.log(this.listeAbonne )
        })
    }
  }
  onLoadAbonne() {
    console.log("liste");
    this.navCtrl.navigateRoot('newstationnements');
}
  dismissModal() {
   
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
