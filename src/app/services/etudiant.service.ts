import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../identification';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  etudiants: Array<object>;
  etudiant: Array<User>

  constructor(private http: HttpClient) {
    this.etudiants = [
    ];

    this.etudiant = [
    ];

    this.http.get<Array<object>>('assets/etudiant.json').subscribe(
      etu => {
        this.etudiants = etu;
      }
    )
    this.http.get<Array<User>>('assets/etudiant.json').subscribe(
      etu => {
        this.etudiant = etu;
      }
    )
  }

  public deleteStudent(student) {
    const index: number = this.etudiant.indexOf(student);
    if (index !== -1) {
      this.etudiant.splice(index, 1);
      alert(student.prenom + " a bien été supprimé!")
    }
    this.etudiant = this.etudiant;
  }
}
