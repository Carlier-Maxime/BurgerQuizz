import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EquipeJoueur } from '../models/equipe-joueur';
import { EquipeJoueurService } from '../services/equipe-joueur.service';

@Component({
  selector: 'app-classement-equipe',
  templateUrl: './classement-equipe.component.html',
  styleUrls: ['./classement-equipe.component.css']
})
export class ClassementEquipeComponent implements OnInit {
  dataObs:Observable<EquipeJoueur[]>

  constructor(public equipeJService: EquipeJoueurService) { 
    console.log("init a getJoueurs()")
    this.dataObs=equipeJService.getEquipeJoueur();
    this.dataObs.subscribe(x=>console.log(x));
  } 
  ngOnInit(): void {
  }

}
