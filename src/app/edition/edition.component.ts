import { Component, OnInit, Injectable } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  machin: number;
  nom: String = '';
  prenom: String = '';
  localisation: String = '';
  email: String = '';
  entreprise: String = '';
  option: String = '';
  salaire: number;

  htmlToAdd :String  ='<br/>';

  constructor(public etuServ: EtudiantService, private route: ActivatedRoute, public conne: ConnexionService) { }


  ngOnInit() {
    this.route.params.subscribe(
      p => {
        this.machin = +p['trucs'];
      }
    );
  }

  saveChanges(i: number) {
    this.htmlToAdd='<br/>';

    if (this.prenom) {
      this.etuServ.etudiant[i].prenom = this.prenom;
      this.htmlToAdd = this.htmlToAdd + '<div> Le prénom a été modifié </div>';
    }
    if (this.nom) {
      this.etuServ.etudiant[i].nom = this.nom;
      this.htmlToAdd = this.htmlToAdd + '<div> Le nom a été modifié </div>';
    }
    if (this.salaire) {
      this.etuServ.etudiant[i].salaire = this.salaire;
      this.htmlToAdd = this.htmlToAdd + '<div> Le salaire a été modifié </div>';
    }
    if (this.entreprise) {
      this.etuServ.etudiant[i].company = this.entreprise;
      this.htmlToAdd = this.htmlToAdd + '<div> L \' entreprise a été modifié </div>';
    }
    if (this.localisation) {
      this.etuServ.etudiant[i].localisation = this.localisation;
      this.htmlToAdd = this.htmlToAdd + '<div> La localisation a été modifié </div>';
    }
    if (this.email) {
      this.etuServ.etudiant[i].email = this.email;
      this.htmlToAdd = this.htmlToAdd + '<div> L\' email a été modifié </div>';
    }
    if (this.option) {
      this.etuServ.etudiant[i].option = this.option;
      this.htmlToAdd = this.htmlToAdd + '<div> L\' option a été modifié </div>';
    }
  }


  deleteStudent(i) {
    this.etuServ.deleteStudent(i)
  }

}
