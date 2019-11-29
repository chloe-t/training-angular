
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PiedPageComponent } from './pied-page/pied-page.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuComponent } from './menu/menu.component';
import { EditionComponent } from './edition/edition.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantService } from './services/etudiant.service';
import { ConnexionService } from './services/connexion.service';
import { Erreur404Component } from './erreur404/erreur404.component';
import { RgpdComponent } from './rgpd/rgpd.component';
import { ChoixRgpdComponent } from './choix-rgpd/choix-rgpd.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilComponent } from './profil/profil.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    PiedPageComponent,
    EtudiantComponent,
    ConnexionComponent,
    MenuComponent,
    EditionComponent,
    Erreur404Component,
    RgpdComponent,
    ChoixRgpdComponent,
    ProfilComponent,
    StatistiquesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
  ],
  providers: [EtudiantService, ConnexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
