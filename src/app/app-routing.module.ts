import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
   // loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'annonce',
    loadChildren: () => import('./annonce/annonce.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'livraison',
    loadChildren: () => import('./livraison/livraison.module').then( m => m.LivraisonPageModule)
  },
  {
    path: 'annonces',
    loadChildren: () => import('./annonces/annonces.module').then( m => m.AnnoncesPageModule)
  },
  {
    path: 'annoncer',
    loadChildren: () => import('./annoncer/annoncer.module').then( m => m.AnnoncerPageModule)
  },
  {
    path: 'perdu',
    loadChildren: () => import('./perdu/perdu.module').then( m => m.PerduPageModule)
  },
  {
    path: 'trouve',
    loadChildren: () => import('./trouve/trouve.module').then( m => m.TrouvePageModule)
  },
  {
    path: 'bureau',
    loadChildren: () => import('./bureau/bureau.module').then( m => m.BureauPageModule)
  },
  {
    path: 'phototheque',
    loadChildren: () => import('./phototheque/phototheque.module').then( m => m.PhotothequePageModule)
  },
  {
    path: 'stationnements',
    loadChildren: () => import('./stationnements/stationnements.module').then( m => m.StationnementsPageModule)
  },
  {
    path: 'newstationnements',
    loadChildren: () => import('./newstationnements/newstationnements.module').then( m => m.NewstationnementsPageModule)
  },
  {
    path: 'comptabilite',
    loadChildren: () => import('./comptabilite/comptabilite.module').then( m => m.ComptabilitePageModule)
  },
  {
    path: 'compta-agent',
    loadChildren: () => import('./compta-agent/compta-agent.module').then( m => m.ComptaAgentPageModule)
  },
  {
    path: 'stationirregulier',
    loadChildren: () => import('./stationirregulier/stationirregulier.module').then( m => m.StationirregulierPageModule)
  },
  {
    path: 'stationabonner',
    loadChildren: () => import('./stationabonner/stationabonner.module').then( m => m.StationabonnerPageModule)
  },
  {
    path: 'liste-stationabonner',
    loadChildren: () => import('./liste-stationabonner/liste-stationabonner.module').then( m => m.ListeStationabonnerPageModule)
  },
  {
    path: 'liste-stationirregulier',
    loadChildren: () => import('./liste-stationirregulier/liste-stationirregulier.module').then( m => m.ListeStationirregulierPageModule)
  },
  {
    path: 'print-stationnnement',
    loadChildren: () => import('./print-stationnnement/print-stationnnement.module').then( m => m.PrintStationnnementPageModule)
  },
  {
    path: 'print-abonnnement',
    loadChildren: () => import('./print-abonnnement/print-abonnnement.module').then( m => m.PrintAbonnnementPageModule)
  },
  {
    path: 'print-infraction',
    loadChildren: () => import('./print-infraction/print-infraction.module').then( m => m.PrintInfractionPageModule)
  },
  {
    path: 'modal-vehicule',
    loadChildren: () => import('./modal-vehicule/modal-vehicule.module').then( m => m.ModalVehiculePageModule)
  },
  {
    path: 'modal-abonne',
    loadChildren: () => import('./modal-abonne/modal-abonne.module').then( m => m.ModalAbonnePageModule)
  },
  {
    path: 'modal-zone',
    loadChildren: () => import('./modal-zone/modal-zone.module').then( m => m.ModalZonePageModule)
  },
  {
    path: 'modal-station',
    loadChildren: () => import('./modal-station/modal-station.module').then( m => m.ModalStationPageModule)
  },
  {
    path: 'recu-stationnement',
    loadChildren: () => import('./recu-stationnement/recu-stationnement.module').then( m => m.RecuStationnementPageModule)
  },
  {
    path: 'recu-infraction',
    loadChildren: () => import('./recu-infraction/recu-infraction.module').then( m => m.RecuInfractionPageModule)
  },  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then( m => m.JobPageModule)
  },
  {
    path: 'media',
    loadChildren: () => import('./media/media.module').then( m => m.MediaPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
  {
    path: 'buton',
    loadChildren: () => import('./buton/buton.module').then( m => m.ButonPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then( m => m.FormPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
