import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}

  /*getAllCategories(): Observable<Question> {
    const url = 'https://equipe04.chez-wam.info:443/api/categories';
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }*/
}
