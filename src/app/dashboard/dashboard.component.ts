import { Component, OnInit } from '@angular/core';
import { Categorie } from '../models/categorie';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  categories: Categorie[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
