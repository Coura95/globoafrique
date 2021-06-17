import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { ModalVehiculePage } from '../modal-vehicule/modal-vehicule.page';
import { ModalZonePage } from '../modal-zone/modal-zone.page';
import { ModalStationPage } from '../modal-station/modal-station.page';
import { BackService } from '../service/back.service';
declare var google;

@Component({
  selector: 'app-stationirregulier',
  templateUrl: './stationirregulier.page.html',
  styleUrls: ['./stationirregulier.page.scss'],
})
export class StationirregulierPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  listeStation: any;
  listeTickets: any;
  listeZone: any;
  listeVehicule: any;
  identifiant_infraction: any;

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController,
    private BackService: BackService,
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,) { }

  ngOnInit() {
    //this.loadMap();
    //this.geolocation.getCurrentPosition();
    // this.getPosition();
    this.selectZone();
    this.selectVehicule();
    this.selectStationnementInfraction();
  }

  forms = {
    /* "adresse": "Coura Test",
    "caisseId": null,
    "categorieVehiculeId": null,
    "creePar": "toto",
    "dateCreation": "2021-03-23T19:28:05.206Z",
    "dateFiltre": "2021-03-23",
    "dateFin": "2021-03-23T19:28:05.206Z",
    "duree": "string",
    "heureDebut": "2021-03-23",
    "identifiant1": "string",
    "identifiant2": "string",
    "latitude": 0,
    "longitude": 0,
    "matricule": "string",
    "montant": 0,
    "parking": "string",
    "stationnementId": null,
    "status": "VALIDER",
    "tarifId": null,
    "typeTicketsId": null,
    "userId": null,
    "userLogin": "string",
    "vehiculeId": null,
    "verbalisation": "string",
    "zone": "string",
    "zonesId": null */

 adresse: "Parcelles Assainies",
     caisseId: null,
     categorieVehiculeId : null,
     creePar: "string",
     dateCreation: "2021-03-16T21:59:15.645Z",
     dateFiltre: "2021-03-23",
     dateFin: "2021-03-16T21:59:15.645Z",
     duree:  "",
     heureDebut: "2021-03-16",
     heureDebutStr:"" ,
     heureFinStr:"",
     identifiant1: "string",
     identifiant2: "string",
     latitude: 0, 
     longitude: 0,
     matricule: "",
     montant: null,
     parking: "",
     stationnementId: null,
     status: "VALIDER",
     tarifId: null,
     typeTicketsId: null,
     userId: null,
     userLogin: "string",
     vehiculeId: null,
     verbalisation: "",
     zonesId: null,
     zoness: "" 
  };
  selectVehicule() {
    var token = localStorage.getItem('token');

    if (token) {

      this.BackService.vehicule(token)
        .subscribe(response => {
          if (response) {
            console.log('-----Liste vehicule');
            this.listeVehicule = response;
            console.log(this.listeVehicule)



          }

        })
    }
  }
  selectZone() {

    var token = localStorage.getItem('token');
    if (token) {
      this.BackService.zone(token)
        .subscribe(response => {
          if (response) {
            console.log('-----Liste zone');
            this.listeZone = response;
            console.log(this.listeZone)

          }

        })
    }
  }
 /*  async Addticket() {

    if (this.forms.zonesId && this.forms.montant && this.forms.categorieVehiculeId && this.forms.heureDebutStr && this.forms.stationnementId && this.forms.heureDebut && this.forms.duree && this.forms.matricule && this.forms.parking && this.forms.verbalisation) {
      console.log(this.forms);
      this.forms.heureFinStr =this.forms.heureFinStr + (this.forms.heureDebutStr + this.forms.duree);
      this.BackService.ticketInfraction(this.forms)
        .subscribe(response => {
          if (response) {
            console.log('-----ajout tickets-----');
            this.listeTickets = response;
            var status=  this.listeTickets.reponse;
            console.log(this.listeTickets)
            localStorage.getItem(this.forms.parking);
            localStorage.getItem(this.forms.matricule);


          }

        })
      const loading = await this.loadingCtrl.create({
        message: 'Chargement...',
        duration: 1000
      });
      await loading.present();
      if(status==='200'){
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Reussit!',
        message: 'Ticket enregistré.',
        buttons: [{
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            //you can write your code or redirection 
            // sample redirection code 
            this.navCtrl.navigateRoot('liste-stationirregulier');
          }
        }
        ]

      });
      await alert.present();

    } else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: '',
        message: 'Echec enrégistrement!',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('Confirm Okay');
              //you can write your code or redirection 
              // sample redirection code 
              this.navCtrl.navigateRoot('stationabonner');
            }
          }
        ]

      });
      await alert.present();


    }







    } else {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Veuillez renseigner tous les champs',
        message: '',
        buttons: ['OK']
      });

      await alert.present();

    }

  } */

  async Addticket() {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 1000
    });
    await loading.present();

    if (this.forms.zonesId && this.forms.montant && this.forms.categorieVehiculeId && this.forms.heureDebutStr && this.forms.stationnementId && this.forms.heureDebut && this.forms.duree && this.forms.matricule && this.forms.parking && this.forms.verbalisation) {
      
      if ( this.forms.heureDebutStr !== " ") {
        console.log("Fin!");
        this.forms.heureDebutStr  =this.forms.heureDebutStr.substr(11, 5);
        var heurefin1 =  parseInt(this.forms.heureDebutStr) + parseInt(this.forms.duree );
        
        var heurefin2 = heurefin1.toString().concat(this.forms.heureDebutStr.substr(2, 3)) ;
        
        var heure = "0";
        if (heurefin2.length === 4) {
          this.forms.heureFinStr = heure.concat(heurefin2);
        } else {
          this.forms.heureFinStr = heurefin2;
        }
      }
      this.BackService.ticketInfraction(this.forms)
        .subscribe(async response => {
          if (response) {
            console.log('-----ajout tickets-----');
            this.listeTickets = response;
            localStorage.setItem('ticket_infraction', response['id']);
          }
        
      /* status === '200' */
      // this.identifiant_infraction = localStorage.getItem('ticket_infraction');
      this.identifiant_infraction = this.listeTickets.id;
      console.log("identifiant", this.identifiant_infraction);
       if (this.identifiant_infraction !==0) {
         const alert = await this.alertController.create({
           cssClass: 'my-custom-class',
           header: 'Alert',
           subHeader: 'Reussit!',
           message: 'Ticket enregistré.',
           buttons: [
             {
               text: 'OK',
               handler: () => {
                 console.log('Confirm Okay');
                 //you can write your code or redirection 
                 // sample redirection code 
                 this.navCtrl.navigateRoot('liste-stationirregulier');
               }
             }
           ]
 
         });
         await alert.present();
       } /* else {
         const alert = await this.alertController.create({
           cssClass: 'my-custom-class',
           header: 'Alert',
           subHeader: '',
           message: 'Echec enrégistrement!',
           buttons: [
             {
               text: 'OK',
               handler: () => {
                 console.log('Confirm Okay');
               
                 this.navCtrl.navigateRoot('stationirregulier');
               }
             }
           ]
 
         });
         await alert.present();
       }  */
      })
    } else {

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alert',
        subHeader: 'Veuillez renseigner tous les champs',
        message: '',
        buttons: ['OK']
      });

      await alert.present();

    }

  }
  async submit() {
    console.log("valider");
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 2000
    });
    await loading.present();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle for alert',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentModalVehicule() {
    const modal = await this.modalController.create({
      component: ModalVehiculePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async presentModalZone() {
    const modal = await this.modalController.create({
      component: ModalZonePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentModalStation() {
    const modal = await this.modalController.create({
      component: ModalStationPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  selectStationnementInfraction() {
    this.BackService.station()
      .subscribe(response => {
        if (response) {
          console.log('-----Liste station');
          this.listeStation = response;
          console.log(this.listeStation)
          for (var i = 0; i < this.listeStation.length; i++) {
            console.log(this.listeStation[i].matricule)
          }
        }
        console.log(this.listeStation)
      })

  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }


      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        var marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          title: "Patientez SVP",
          position: latLng,
          icon: "http://i.imgur.com/fDUI8bZ.png",

        });

        var infoWindow = new google.maps.InfoWindow({
          content: "<div style='color: orange;'>Ma position actuelle!</div>"
        });

        google.maps.event.addListener(marker, "click", function () {
          infoWindow.open(this.map, marker);
        });

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())






      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }





}
