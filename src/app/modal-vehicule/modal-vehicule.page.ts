import { Component, OnInit,  Input } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { BackService } from '../service/back.service';
import { NewstationnementsPage } from '../newstationnements/newstationnements.page';

@Component({
  selector: 'app-modal-vehicule',
  templateUrl: './modal-vehicule.page.html',
  styleUrls: ['./modal-vehicule.page.scss'],
})
export class ModalVehiculePage implements OnInit {
  
  listeVehicule: any;
  value={vehiculechoisit: " "};
  modalNom: string;
  modalId: number;
   choix: " ";

  constructor(
    private BackService: BackService ,
    public modalController: ModalController,
    public navCtrl: NavController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    
   // this.modalId = this.navParams.data.paramID;
    
    this.vehicule = this.navParams.get('vehicule');
    console.log(this.vehicule);
    this.selectVehicule() ;
    //this.onLoadVehicule();
  }

 /* onLoadVehicule() {
    console.log("liste");
    this.navCtrl.navigateRoot('newstationnements');
}*/
vehicule = {
  id: Number ,
  nom: String
};

async presentModalVehicule() {
  var token =localStorage.getItem('token');
  if (token && this.value.vehiculechoisit) {
    this.BackService.vehicule(token)
    .subscribe(response => {
      if (response) {
        console.log('-----Liste vehicule');
        this.listeVehicule = response;
        console.log(this.listeVehicule )
        for (var i = 0; i < this.listeVehicule.length; i++) {
       
     
       
        console.log(this.listeVehicule[i].nom )
      }
   
      }
     /* this.value = {
        id: this.listeVehicule.id,
        nom: this.listeVehicule.nom
      }*/
      console.log(this.listeVehicule )
      })
  }
  const modal = await this.modalController.create({
    component: ModalVehiculePage,
    componentProps:this.listeVehicule
   /* {
      "paramID": this.liste.id,
      "paramNom": this.liste.nom
    }*/ 
  });
  console.log("choix",this.choix);
/* modal.onDidDismiss().then((vehiculechoisit) => {
  if (vehiculechoisit !== null) {
    this.value.vehiculechoisit = vehiculechoisit.data;
    //alert('Modal Vehicule :'+ this.value.vehiculechoisit);
  }
});*/
return await modal.present();
}
  getOptVehicule(option) {
   
    return option;
  };

  dismissModal() {
   console.log("choix:",this.choix);
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  selectVehicule() {
    var token =localStorage.getItem('token');
    var liste = [];
    if (token) {
   /* var  request = request.clone({ 
        setHeaders: {        'Authorization': `Bearer ${token}`      }    });
      }*/
    
      this.BackService.vehicule(token)
      .subscribe(response => {
        if (response) {
          console.log('-----Liste vehicule');
          this.listeVehicule = response;
          console.log(this.listeVehicule )
        
      
        }

        })
    }
  }

}
