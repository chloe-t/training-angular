import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { EtudiantService } from '../services/etudiant.service';


@Component({ 
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  constructor(public etuServ: EtudiantService) { }

  ngOnInit() { 

    var countICC = this.etuServ.etudiant.filter((obj) => obj.option === "ICC").length;
    var countIA = this.etuServ.etudiant.filter((obj) => obj.option === "IA").length;
    var countIMSI = this.etuServ.etudiant.filter((obj) => obj.option === "IMSI").length;
    
    //console.log(countIA);

    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Répartition des étudiants par option."
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: countICC, label: "ICC" },
          { y: countIA, label: "IA" },
          { y: countIMSI, label: "IMSI" }
        ]
      }]
    });

    var countAbroad = this.etuServ.etudiant.filter((obj) => obj.localisation === "abroad").length;
    var countFR = this.etuServ.etudiant.length - countAbroad;

    console.log(countFR);
    
    

    let chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Répartition géographique"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: countAbroad, name: "Travaille à l'étranger" },
          { y: countFR, name: "Travaille en France" }
        ]
      }]
    });
      
    chart.render();
    chart2.render();
  }

}
