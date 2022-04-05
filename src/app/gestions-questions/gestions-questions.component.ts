import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { FormControl , FormGroup } from '@angular/forms';
import { Question } from '../models/question';
import { QuestionsService } from '../services/questions.service';
import { Observable } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../services/theme.service';
import {Theme} from '../models/theme'

@Component({
  selector: 'app-gestionjoueur',
  templateUrl: './gestions-questions.component.html',
  styleUrls: ['./gestions-questions.component.css']
})
export class GestionsQuestionsComponent implements OnInit {
  edit=true
  bl:number=1;
  id_question=0;
  explicit=false;
  id = 0;
  current: any = null;
  public checklist: any[];
  GestionQuestion: Question[] = [];
  Theme:Theme[]=[];
  tmp:number=7
  form: FormGroup = new FormGroup({
    libelle: new FormControl(''),
    id_catetgorie: new FormControl(0),
    id_theme:new FormControl(0) ,
    explicit: new FormControl(true),
    fun_fact: new FormControl('')

  });

  constructor(private QuestionsService: QuestionsService,private ThemeService:ThemeService, private route: ActivatedRoute) {
    this.checklist = [
      { id: 1, value: true, isSelected: false ,libelle:"Vrai"},
      { id: 2, value: false, isSelected: false ,libelle:"Faux"}
    ];
  }

  ngOnInit(): void {
    this.refresh()
  }
  onEdit(id: number): void {
    this.id = id;
    this.current = this.Theme[this.findCategorie(id)];
    console.log(this.current);
    this.edit = true;
  }

  refresh(){
    this.QuestionsService.getAllQuestions().subscribe(Questions => {
      this.GestionQuestion = Questions;
    });
    this.ThemeService.getAllThemes().subscribe(Theme => {
      this.Theme = Theme;
    });

  }
  findCategorie(id: number): number {
    for (let i = 1; i < this.Theme.length; i++) {
      if (this.Theme[i].id_theme === id) { return i; }
    }
    return -1;
  }

  addQuestion(n:number): boolean {
    const val: any = this.form.value;
    const bla:number=(+this.form.value.id_theme)
    this.QuestionsService.addQuestion(
      {
  id_question : this.tmp+this.GestionQuestion.length,
  libelle: val.libelle,
  id_catetgorie: n,
  id_theme: +bla,
  explicit: val.explicit,
  fun_fact: val.fun_fact
}
    );
    this.refresh()
    this.tmp+=1
    return true;
  }
  getAllQuestion():Observable<Question>{
    return this.getAllQuestion()
  }
  setBL(n:number){
    this.bl=n

  }


  isAllSelected(item:any) {
    this.checklist.forEach(val => {
      if (val.id == item.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
        this.explicit=!val.value
      }
    });

  }
  updateQuestion(){
    console.log("test")
  }
  editB(){
    console.log(this.edit)

    if(this.edit){
      this.edit=false
    }
    else{
      this.edit=true
    }
  }

}
