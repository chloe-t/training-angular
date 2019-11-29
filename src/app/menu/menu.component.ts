import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public conne:ConnexionService) { }

  ngOnInit() {

  }

  isConnected(){
    return this.conne.connecte;
  }

  disconnect(){
    this.conne.connecte=false;
    this.conne.role='';
  }

}
