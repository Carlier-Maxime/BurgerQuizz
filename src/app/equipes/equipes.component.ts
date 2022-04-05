import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css']
})
export class EquipesComponent implements OnInit {
  form: FormGroup = new FormGroup({
    equipe: new FormControl('', [Validators.required])
  });
  load = false;
  idJoueur = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idJoueur = params.id_joueur;
      this.load = true;
    });
  }

  onSubmit(): void {

  }

}
