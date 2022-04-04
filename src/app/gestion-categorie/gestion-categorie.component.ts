import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../services/questions.service';
import {ActivatedRoute} from '@angular/router';
import {ReponsesService} from '../services/reponses.service';
import {Question} from '../models/question';
import {Reponse} from '../models/reponse';
import {Categorie} from '../models/categorie';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  categories: Categorie[] = [];
  loading: boolean = false;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
  }



}
