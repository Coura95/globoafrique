import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, LoadingController, ModalController, NavController } from '@ionic/angular';
import { BackService } from '../service/back.service';
import { ModalAbonnePage } from '../modal-abonne/modal-abonne.page';
import { ModalZonePage } from '../modal-zone/modal-zone.page';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
declare var google;

@Component({
  selector: 'app-stationabonner',
  templateUrl: './stationabonner.page.html',
  styleUrls: ['./stationabonner.page.scss'],
})
export class StationabonnerPage implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  latitude: number;
  longitude: number;
  listeAbonne: any;
  listeZone: any;
  Zonechoisit = null;
  listeTickets: any;
  listeMatricule: any;
  ticket = 0;
  identifiant_abonne: any;

  constructor(private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private BackService: BackService,
    public modalController: ModalController,
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    public navCtrl: NavController,
    private storage: Storage) { }

  ngOnInit() {
    //this.loadMap();
    //this.geolocation.getCurrentPosition();
    // this.getPosition();
    // this.selectAbonne();
    this.selectZone();
    this.selectMatricule();
    //this.Addticket();
    //this.createrecu();

  }
  forms = {

    adresse: "Parcelles Assainies",

    duree: "",
    heureDebutStr: "",
    heureFinStr: "",
    identifiant1: "string",
    identifiant2: "string",
    latitude: 0,
    longitude: 0,
    matricule: "",
    montant: 0,
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
    zoness: ""
  };

  selectMatricule() {
    var token = localStorage.getItem('token');

    if (token) {

      this.BackService.abonne(token)
        .subscribe(response => {
          if (response) {
            console.log('-----Liste matricule');
            this.listeMatricule = response;
            console.log(this.listeMatricule)



          }

        })
    }
  }

  async Addticket() {
   
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 1000
    });
    await loading.present();

     if (this.forms.zonesId && this.forms.vehiculeId && this.forms.heureDebutStr && this.forms.duree && this.forms.parking) {

      if (this.forms.heureDebutStr !== " ") {
        console.log("Fin!");
        this.forms.heureDebutStr = this.forms.heureDebutStr.substr(11, 5);
        var heurefin1 = parseInt(this.forms.heureDebutStr) + parseInt(this.forms.duree);

        var heurefin2 = heurefin1.toString().concat(this.forms.heureDebutStr.substr(2, 3));
        this.forms.heureFinStr = heurefin2;
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
    // this.identifiant = parseInt(localStorage.getItem('ticket'));
    this.identifiant_abonne = this.listeTickets.id;
      console.log("identifiant", this.identifiant_abonne);
      if (this.identifiant_abonne !== 0  ) {
       
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

                this.navCtrl.navigateRoot('liste-stationabonner');
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

                this.navCtrl.navigateRoot('stationabonner');
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
  
  /* async submit() {
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
  } */
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
  async presentModalAbonne() {
    const modal = await this.modalController.create({
      component: ModalAbonnePage,
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

  selectAbonne() {
    var token = localStorage.getItem('token');

    if (token) {


      this.BackService.abonne(token)
        .subscribe(response => {
          if (response) {
            console.log('-----Liste abonne');
            this.listeAbonne = response;
            console.log(this.listeAbonne)
            for (var i = 0; i < this.listeAbonne.length; i++) {
              console.log(this.listeAbonne[i].matricule)
            }
          }
          console.log(this.listeAbonne)
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
