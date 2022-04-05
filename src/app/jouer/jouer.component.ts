import { Question } from './../models/question';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ɵsetCurrentInjector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { Reponse } from '../models/reponse';
import { QuestionsService } from '../services/questions.service';
import { ReponsesService } from '../services/reponses.service';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-jouer',
  templateUrl: './jouer.component.html',
  styleUrls: ['./jouer.component.css']
})
export class JouerComponent implements  OnChanges,OnInit {


  question: Question = <Question>{};
  reponses: Reponse[] = [];
  loading: boolean = false;
  tabReponse: any = [];
  score:number = 0;
  valInterval:number = 6000;
  estSoumis = false;
  form: any;


  constructor(private questionsService: QuestionsService, private route: ActivatedRoute, private reponsesService: ReponsesService,private fb:FormBuilder) { }



  @Input('tabQ')
  current!: Question[];

  @Input('categorie')
  categorieChoisi!: number;

  nIntervId: any;
  id:number = 0;

  afficheQuestion(){
    this.estSoumis = false;
    if(this.current.length > 0){
      this.id = this.current[this.current.length-1].id_question;
      this.questionsService.getQuestion(this.id).subscribe(question => {
        this.question = question;
        this.reponsesService.getReponses(this.id).subscribe(reponses => {
          this.reponses = reponses;
          this.loading = false;
        });
      });
      this.current.pop();
    }
    else{
      console.log(this.score);
    }
  }

  valueOfRep(rep:boolean, idQuestion:number , idReponse:number){
    this.estSoumis = true;
    let tabRep = [idQuestion,idReponse,rep];
    this.tabReponse.push(tabRep);
    if(rep){
      this.score++;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.current.length > 0 ){
      this.afficheQuestion();
      let a = setInterval(() => {
        this.afficheQuestion();
      }, this.valInterval);
    }

  }


  repForm = new FormGroup({
      title: new FormControl(),
  });


  formAutre = this.fb.group({
    name: '',
    skills: this.fb.array([]) ,
  });


  // cette fonction est appelée lorsque l'on utilise le mode sel et poivre
  submitBook() {
    this.estSoumis = true;
    let rep: Reponse[] = [];
    console.log(this.repForm.value.title);
    this.reponsesService.getReponses(this.id).subscribe(value => {
      let a = value.filter(q => q.id_reponse == this.repForm.value.title)[0];
      this.valueOfRep(a.bonne_reponse,a.id_question,a.id_reponse);
    });
  }

  test(){
    console.log("ok");
    console.log(this.formAutre.value);
  }

  test2(event:any){
    console.log(event.value);
  }


  ngOnInit(): void {
  }
}
