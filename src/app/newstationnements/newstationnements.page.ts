import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BackService } from '../service/back.service';
import { ModalVehiculePage } from '../modal-vehicule/modal-vehicule.page';
import { ModalZonePage } from '../modal-zone/modal-zone.page';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

declare var google;

@Component({
  selector: 'app-newstationnements',
  templateUrl: './newstationnements.page.html',
  styleUrls: ['./newstationnements.page.scss'],
})
export class NewstationnementsPage implements HttpInterceptor {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  listeVehicule: any;
  listeVoiture: any;
  listeTickets: any;
  value = { vehiculechoisit: " " };
  choix: "";
  listeStation: any;
  liste = [];
  vehiculechoisit = null;
  voiturechoisit = null;
  zoneselected = null;
  vehiculeselected = null;
  data_duree: any;
  listeZone: any;
  identifiant_station: any;

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private router: Router,
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
    private BackService: BackService,
    public modalController: ModalController) { }

  ngOnInit() {
    //this.loadMap();
    //this.geolocation.getCurrentPosition();
    // this.getPosition();
    this.selectVehicule();
    this.selectVoiture();
    this.selectZone();
    // this.intercept();

  }

  forms = {
    adresse: "Parcelles Assainies",
    caisseId: null,
    categorieVehiculeId: null,
    creePar: "string",
    dateCreation: "2021-03-16T21:59:15.645Z",
    dateFin: "2021-03-16T21:59:15.645Z",
    duree: "",
    heureDebut: "2021-03-16",
    heureDebutStr: "",
    heureFinStr: "",
    latitude: 0,
    longitude: 0,
    matricule: "",
    montant: null,
    parking: "",
    stationnementId: null,
    status: "VALIDER",
    tarifId: null,
    userId: null,
    userLogin: "string",
    vehiculeId: null,
    verbalisation: "test",
    zonesId: null,
    zoness: ""

    /*  adresse: "Parcelles Assainies",
      caisseId: null,
      categorieVehiculeId : null,
      creePar: "string",
      dateCreation: "2021-03-16T21:59:15.645Z",
      dateFiltre: "2021-03-23",
      dateFin: "2021-03-16T21:59:15.645Z",
      duree:  "",
      heureDebut: "2021-03-16",
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
      verbalisation: "test",
      zonesId: null,
      zoness: "" */
  };

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
  getOptVehicule(option) {
    return option;
  };
  getOptVoiture(option) {
    return option;
  };
  GoToModal() {
    this.navCtrl.navigateRoot('ModalVehiculePage');
  }

  async Addticket() {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 1000
    });
    await loading.present();

    if (this.forms.zonesId
      && this.forms.categorieVehiculeId && this.forms.matricule
       && this.forms.heureDebutStr && this.forms.duree && this.forms.parking && this.forms.montant
      ) {

      if (this.forms.heureDebutStr !== " ") {
        console.log("Fin!");
        this.forms.heureDebutStr = this.forms.heureDebutStr.substr(11, 5);
        var heurefin1 = parseInt(this.forms.heureDebutStr) + parseInt(this.forms.duree);

        var heurefin2 = heurefin1.toString().concat(this.forms.heureDebutStr.substr(2, 3));
        var heure = "0";
        if (heurefin2.length === 4) {
          this.forms.heureFinStr = heure.concat(heurefin2);
        } else {
          this.forms.heureFinStr = heurefin2;
        }
      }
      this.BackService.ticket(this.forms)
        .subscribe(async response => {
          if (response) {
            console.log('-----ajout tickets-----');
            this.listeTickets = response;
            localStorage.setItem('ticket', response['id']);
          }
       
      /* status === '200' */
     // this.identifiant = localStorage.getItem('ticket');
     this.identifiant_station =this.listeTickets.id;
     console.log("identifiant", this.identifiant_station);
      if (this.identifiant_station !== 0) {
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
                this.navCtrl.navigateRoot('stationnements');
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

                this.navCtrl.navigateRoot('newstationnements');
              }
            }
          ]

        });
        await alert.present();
      } */
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

    this.BackService.tickets()
      .subscribe(response => {
        if (response) {
          console.log('-----Liste tickets-----');
          this.listeTickets = response;
          console.log(this.listeTickets);
        }
        console.log(this.liste)
      })

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

  vehicule = {
    id: Number,
    nom: String
  };

  async presentModalVehicule(vehicule) {
    var choix = " ";
    var token = localStorage.getItem('token');
    if (token && this.value.vehiculechoisit && choix) {
      this.BackService.vehicule(token)
        .subscribe(response => {
          if (response) {
            console.log('-----Liste vehicule');
            this.listeVehicule = response;
            console.log(this.listeVehicule)
            for (var i = 0; i < this.listeVehicule.length; i++) {

              this.liste.push({
                id: this.listeVehicule[i].id,
                nom: this.listeVehicule[i].nom
              });

              console.log(this.listeVehicule[i].nom)
            }

          }

          console.log(this.listeVehicule)
        })
    }
    const modal = await this.modalController.create({
      component: ModalVehiculePage,
      componentProps: this.listeVehicule

    });


    return await modal.present(), vehicule;

  }

  async presentModalZone() {
    const modal = await this.modalController.create({
      component: ModalZonePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    {

      let token = localStorage.getItem('token');

      let tokenizedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`

        }
      })
      return next.handle(tokenizedReq);
    }
  }



  selectVehicule() {
    var token = localStorage.getItem('token');

    if (token && this.value.vehiculechoisit) {

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

  selectStationnementNormal() {

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

  selectVoiture() {
    var token = localStorage.getItem('token');
    if (token) {
      this.BackService.vehicule(token)
        .subscribe(response => {
          if (response) {

            console.log('-----Liste voiture-----');
            this.listeVoiture = response;
            console.log(this.listeVoiture)



          }


        })
    }
  }




}
