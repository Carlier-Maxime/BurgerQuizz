import { JouerComponent } from './jouer/jouer.component';
import { JeuComponent } from './jeu/jeu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuestionsComponent} from './questions/questions.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GestionCategorieComponent} from './gestion-categorie/gestion-categorie.component';
import { ClassementComponent } from './classement/classement.component';
import { ClassementEquipeComponent } from './classement-equipe/classement-equipe.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'question/:id', component: QuestionsComponent},
  {path: 'jeu/:id', component: JouerComponent},
  {path: 'api', component : JeuComponent},
  {path: 'categorie', component: GestionCategorieComponent},
  {path: 'classement', component: ClassementComponent},
  {path: 'classement-equipe', component: ClassementEquipeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
