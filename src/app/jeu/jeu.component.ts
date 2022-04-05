import { ReponsesService } from './../services/reponses.service';
import { QuestionsService } from './../services/questions.service';
import { Question } from './../models/question';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';
import { Reponse } from '../models/reponse';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css'],
})
export class JeuComponent implements OnInit {
  tabQuestions: Observable<Question[]> = new Observable();
  tabQuestionsLive: Question[] = [];
  estTrie: boolean = false;
  tab: Question[] = [];
  current_question: Question | undefined;
  timeLeft: number = 60;
  categorie: number = 0;
  nbQuestions: number = 10;
  listCategories: Categorie[] = [];

  tabQuestionRetourne: Question[] = [];

  constructor(
    private categoriesService: CategoriesService,
    private http: HttpClient,
    private router: Router,
    private questionsService: QuestionsService,
    private reponsesService: ReponsesService
  ) {}

  triSelect(id: number) {
    this.categorie = id;
    this.tabQuestions = this.questionsService.recupQuestions(id);
    this.estTrie = true;
    this.tabQuestions.subscribe((value) => {
      this.tabQuestionsLive = value;
      this.retourneQuestion();
    });
  }

  retourneQuestion() {
    let randNumber = 0;
    let questionsChoisi: Question[] = [];
    for (let i = 0; i < this.nbQuestions; i++) {
      randNumber = Math.random() * this.tabQuestionsLive.length - 1;
      randNumber = Math.ceil(randNumber);
      questionsChoisi.push(this.tabQuestionsLive[randNumber]);
      let index = this.tabQuestionsLive.indexOf(
        this.tabQuestionsLive[randNumber]
      );
      this.tabQuestionsLive.splice(index, 1);
    }
    this.tabQuestionRetourne = questionsChoisi;
  }

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((categories) => {
      this.listCategories = categories;
    });
    sort = this.route.snapshot.queryParamMap.get('filtre');
  }
}
