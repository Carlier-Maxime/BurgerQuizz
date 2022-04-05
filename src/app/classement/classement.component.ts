import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  dataObs:Observable<Personne[]>

  constructor(public joueurService: JoueurService) { 
    console.log("init a getJoueurs()")
    this.dataObs=joueurService.getJoueurs();
    //this.dataObs.subscribe(x=>console.log(x));
  } 

  ngOnInit(): void {
  }

}
