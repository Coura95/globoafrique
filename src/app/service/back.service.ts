import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {  HttpRequest,  HttpHandler,  HttpEvent,    HttpResponse,  HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  //apiUrl = 'https://dry-sierra-80160.herokuapp.com';
 // apiUrl1 ='https://tranquil-everglades-72244.herokuapp.com';
  apiUrl1 ='https://fathomless-sands-49584.herokuapp.com';
  apiUrl ='https://stormy-badlands-63440.herokuapp.com';


  constructor( public http: HttpClient,
    private storage: Storage,) {
    console.log('Hello RestServiceProvider Provider');
   }

   login(value: any) {
    return this.http.post(this.apiUrl + '/api/authenticate', value);
  }

  vehicule(token: any) {
    return this.http.get(this.apiUrl + '/api/categorie-vehicules', token);
  }

  abonne(token: any) {
    return this.http.get(this.apiUrl + '/api/vehicules', token);
  }

  abonnement(token: any) {
    return this.http.get(this.apiUrl + '/api/abonnements', token);
  }

  zone(token: any) {
    return this.http.get(this.apiUrl + '/api/zones', token);
  }

  station() {
    return this.http.get(this.apiUrl + '/api/stationnements-list/2');
  }

  tickets() {
    return this.http.get(this.apiUrl + '/api/tickets');
  }

  listeInfraction() {
    return this.http.get(this.apiUrl + '/api/tickets-infraction');
  }

  listeStationnement() {
    return this.http.get(this.apiUrl + '/api/tickets-stationnement-normal');
  }

  listeAbonnement() {
    return this.http.get(this.apiUrl + '/api/tickets-abonnement');
  }

  ticket(forms: any) {
    return this.http.post(this.apiUrl + '/api/tickets',forms);
  }

  ticketInfraction(forms: any) {
    return this.http.post(this.apiUrl + '/api/tickets-facture',forms);
  }

  infoRecu(id: any) {
    return this.http.get(this.apiUrl + '/api/tickets-costum/{id}',id);
  }

  

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Response>> {
    {
      console.log('-----Liste Agent');
      let token = this.storage.get("token");
      console.log(token);
      let tokenizedReq = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
          
        }
      })
      return next.handle(tokenizedReq);
    }
   }
}
