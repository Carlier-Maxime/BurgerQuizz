import { Injectable } from '@angular/core';
import {Question} from "../models/question";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestion(id: string | number): Observable<Question> {
    const url = 'https://equipe01.chez-wam.info/api/questions?id_question=eq.' + id;
    return this.http.get<Question[]>(url).pipe(map(rep => rep[0]));
  }
  getAllQuestions(){
    const url = 'https://equipe04.chez-wam.info:443/api/questions';
    return this.http.get<Question[]>(url);

  }
  addQuestion(question:Question){
    const url = 'https://equipe04.chez-wam.info:443/api/questions';
    this.http.post<Question>(url, question).subscribe();
  }
  updateTheme(id: number, question: Question): Question{
    const url = 'https://equipe04.chez-wam.info:443/api/themes?id_theme=eq.' + id;
    this.http.patch(url, question).subscribe(() => alert('Categorie modifié !'));
    return question;
  }
}
