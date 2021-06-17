import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
//import { AlertController } from 'ionic-angular';
import { BackService } from '../service/back.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any;
  password: any;
  

  constructor( public alertCtrl: AlertController,
    public navCtrl: NavController,
    private  router:  Router,
    public loadingCtrl: LoadingController,
    private alertController: AlertController,
    private storage: Storage,
     private BackService: BackService ) {

  //  this.login();
  
 
   }
 user={
    username: "",
    password: "",
    rememberMe: true
  };
  users: any;
 
  async showAlert()
       {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Subtitle for alert',
          message: 'This is an alert message.',
          buttons: ['OK']
        });
    
        await alert.present();
      }

 async connect() {
  if (this.user.password == "" || this.user.username == "") {
   

      const alert =  await this.alertController.create({
        header: '',
        subHeader: 'Attention!',
        message: 'Le login et le mot de passe sont obligatoires!',
        buttons: ['OK']
    });
    await alert.present();
  } else {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 2000
    });
   await loading.present();
   console.log(this.user);
  // var value = { login: this.login, password: this.password }
    this.BackService.login(this.user)
      .subscribe(response => {
        if (response) {
         
          console.log(response)
          loading.dismiss();
          localStorage.setItem('token', response['id_token']);
          localStorage.getItem( this.user.username)
          localStorage.getItem( this.user.password)
          this.storage.set('token', response['id_token']);
         
          var token = response['id_token'];
          console.log("cle unique",token)
         /* var date = moment().format('DD-MM-YYYY');
          let dateten = moment(date, "DD-MM-YYYY").add(9, 'days').toDate();
          let dateExpiration = dateten;
          this.storage.set('DateToken', date);
          this.storage.set('ExpirationToken',moment(dateExpiration).format("DD-MM-YYYY"));
          this.storage.set('login', this.login)
          this.storage.set('mdp', this.password)*/
          
         // this.navCtrl.setRoot(home);
        
          this.navCtrl.navigateRoot('home');
        }
      }, async error1 => {
        loading.dismiss();
        let alert = await this.alertCtrl.create({
         
          subHeader: 'Attention!',
          message: 'Erreur de connexion!',
          buttons: ['OK']
        });
        await alert.present();
      })
  }
  //this.navCtrl.setRoot(MenuPage);

}


async connexion() {
  if (this.user.password == "" || this.user.username == "") {
   

      const alert =  await this.alertController.create({
        header: '',
        subHeader: 'Attention!',
        message: 'Le login et le mot de passe sont obligatoires!',
        buttons: ['OK']
    });
    await alert.present();
  } else {
    const loading = await this.loadingCtrl.create({
      message: 'Chargement...',
      duration: 2000
    });
   await loading.present();
   console.log(this.user);
  // var value = { login: this.login, password: this.password }
  this.navCtrl.navigateRoot('home');
  }
 

}

  ngOnInit() {
  }
 
  
}
