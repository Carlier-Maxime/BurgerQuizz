import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Theme} from '../models/theme';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) {}
  getAllThemes(){
    const url = 'https://equipe04.chez-wam.info:443/api/themes';
    return this.http.get<Theme[]>(url);

  }
  addTheme(theme: Theme): void{
    const url = 'https://equipe04.chez-wam.info:443/api/themes';
    this.http.post<Theme>(url, theme).subscribe();
  }
  updateTheme(id: number, theme: Theme): Theme{
    const url = 'https://equipe04.chez-wam.info:443/api/themes?id_theme=eq.' + id;
    this.http.patch(url, theme).subscribe(() => alert('Categorie modifié !'));
    return theme;
  }

}
