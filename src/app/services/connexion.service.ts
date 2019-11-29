import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

connecte:boolean;
role: String;

  constructor() {
    //this.connecte=false;
    this.connecte=false;
    this.role='';
   }
}
