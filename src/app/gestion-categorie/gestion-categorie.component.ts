import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Categorie} from '../models/categorie';
import {CategoriesService} from '../services/categories.service';
import {FormControl, FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css']
})
export class GestionCategorieComponent implements OnInit {
  categories: Categorie[] = [];
  loading = false;
  form: FormGroup = new FormGroup({
    libelle: new FormControl(''),
    bareme: new FormControl(''),
    nb_questions: new FormControl(''),
  });

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loading = true;
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories;
      this.loading = false;
    });
  }

  addCategorie(): boolean {
    const val: any = this.form.value;
    this.categoriesService.addCategorie(
      {
        id_catetgorie : this.categories.length,
        libelle : val.libelle,
        bareme : val.bareme,
        nb_question : val.nb_questions}
    );
    return true;
  }

}
