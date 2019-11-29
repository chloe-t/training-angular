import { Component, OnInit, Injectable } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn:'root'
})

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  machin : number;
  constructor(public etuServ:EtudiantService, private route:ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(
    p => {
      console.log(p['trucs']);
      this.machin = +p['trucs'];
    }
  );
  }

}
