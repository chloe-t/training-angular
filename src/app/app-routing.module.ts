import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EditionComponent } from './edition/edition.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthentificationsGuard } from './services/authentifications.guard';
import { Erreur404Component } from './erreur404/erreur404.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChoixRgpdComponent } from './choix-rgpd/choix-rgpd.component';
import { ProfilComponent } from './profil/profil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';


const routes: Routes = [
  { path: 'liste', component: AccueilComponent, canActivate: [AuthentificationsGuard] },
  { path: 'pied-page', component: PiedPageComponent },
  { path: '', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'edition', component: EditionComponent, canActivate: [AuthentificationsGuard] },
  { path: 'edition/:trucs', component: EditionComponent ,canActivate: [AuthentificationsGuard] },
  { path: 'etudiant', component: EtudiantComponent, canActivate: [AuthentificationsGuard] },
  { path: 'etudiant/:trucs', component: EtudiantComponent, canActivate: [AuthentificationsGuard] },
  { path: 'rgpd', component: RgpdComponent, canActivate: [AuthentificationsGuard]},
  { path: 'choix', component: ChoixRgpdComponent, canActivate: [AuthentificationsGuard]},
  { path: 'profil', component: ProfilComponent, canActivate: [AuthentificationsGuard] },
  { path: 'stat', component: StatistiquesComponent, canActivate: [AuthentificationsGuard]},
  { path: '**', component: Erreur404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatCheckboxModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
