import { Component, OnInit } from '@angular/core';
import { User } from '../identification';
import { ConnexionService } from '../services/connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  identification: User;

  //Initialisation du service de connexion
  constructor(public conne: ConnexionService) { }

  ngOnInit() {
    this.identification = {
      id:'',
      pwd: '',
      email: '',
      nom: '',
      prenom: '',
      company: '',
      salaire: -1 ,
      option: '',
      localisation: '' 
    }
  }

  desTrucs() {
    console.log(this.identification);
  }

  authentification() {
    //Lier une connexion à la fonction d'authentification
    console.log("tentative d'authentification");
    if ((this.identification.id != "admin") && (this.identification.id != "user") && (this.identification.id != "prof")) {
      alert("Wrong username. Try with correct one.")
    }else{
      this.conne.connecte=true;
      this.conne.role=this.identification.id;
      console.log("role="+this.conne.role)
    }
  }
}


