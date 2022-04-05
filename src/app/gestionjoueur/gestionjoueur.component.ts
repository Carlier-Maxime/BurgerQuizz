import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { EmailValidator, FormControl , FormGroup } from '@angular/forms';
import { Personne } from '../models/personnes';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-gestionjoueur',
  templateUrl: './gestionjoueur.component.html',
  styleUrls: ['./gestionjoueur.component.css']
})

export class GestionjoueurComponent implements OnInit {
  personnes: Personne[] = [];
  tmp:number=0
  form: FormGroup = new FormGroup({
    pseudo: new FormControl(''),
    mail: new FormControl(''),
    age: new FormControl(0),
    score:new FormControl(0),
    temps:new FormControl(0),
    avatar_url:new FormControl('')
  });


  constructor(private personnesService: PersonneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.personnesService.getAllPersonnes().subscribe(personnes => {
      this.personnes = personnes;
    });

  }
  addJoueur(): boolean {
    const val: any = this.form.value;
    this.personnesService.addPersonne(
      {
  id_joueur : this.personnes.length+this.tmp,
  pseudo: val.pseudo,
  mail: val.mail,
  age: val.age,
  score: 0,
  temps: 0,
  avatar_url: val.avatar_url
}
    );
    this.tmp+=1
    return true;
  }

}
