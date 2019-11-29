import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { userInfo } from 'os';


@Component({
  selector: 'app-choix-rgpd',
  templateUrl: './choix-rgpd.component.html',
  styleUrls: ['./choix-rgpd.component.css']
})
export class ChoixRgpdComponent implements OnInit {
  
  localisation = true; 
  email=true;
  entreprise=true;
  option=true;
  salaire=true;
  htmlToAdd :String  ='<br/>';

  constructor(public etuServ: EtudiantService) {

  }

  ngOnInit() {
  }

  FieldsChange(values: any) {
    let msg : String; 

    if (values.currentTarget.value == "localisation"){
      this.localisation=values.currentTarget.checked;
    }
    if (values.currentTarget.value == "email"){
      this.email=values.currentTarget.checked;
    }
    if (values.currentTarget.value == "entreprise"){
      this.entreprise=values.currentTarget.checked;
    } 
    if (values.currentTarget.value == "option"){
      this.option=values.currentTarget.checked;
    }
    if (values.currentTarget.value == "salaire"){
      this.salaire=values.currentTarget.checked;
    }
  }

  changeChoice(){    
    this.htmlToAdd='<br/>';
    if (!this.salaire){
      this.etuServ.etudiant[0].salaire=-1;
      //console.log(this.etuServ.etudiant[0].salaire)
      this.htmlToAdd = this.htmlToAdd + '<div> Votre salaire a été supprimé </div>';
    }
    if (!this.localisation){
      this.etuServ.etudiant[0].localisation="censored";
      //console.log(this.etuServ.etudiant[0].localisation);
      this.htmlToAdd = this.htmlToAdd + '<div> Votre localisation a été supprimée </div>';
    }
    if (!this.email){
      this.etuServ.etudiant[0].email="censored";
      //console.log(this.etuServ.etudiant[0].email);
      this.htmlToAdd = this.htmlToAdd + '<div> Votre email a été supprimé</div>';
    }
    if (!this.entreprise){
      this.etuServ.etudiant[0].company="censored";
      //console.log(this.etuServ.etudiant[0].company);
      this.htmlToAdd = this.htmlToAdd + '<div> Votre entreprise a été supprimée </div>';
    }
    if (!this.option){
      this.etuServ.etudiant[0].option="censored";
      //console.log(this.etuServ.etudiant[0].option);
      this.htmlToAdd = this.htmlToAdd + '<div> Votre option a été supprimée </div>';
    }

  }


}
