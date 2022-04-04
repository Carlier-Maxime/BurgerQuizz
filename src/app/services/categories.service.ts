import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Categorie} from '../models/categorie';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Categorie[]> {
    const url = 'https://equipe04.chez-wam.info:443/api/categories';
    return this.http.get<Categorie[]>(url);
  }

  addCategorie(categorie: Categorie): void{
    const url = 'https://equipe04.chez-wam.info:443/api/categories';
    this.http.post<Categorie>(url, categorie).subscribe();
  }
}
