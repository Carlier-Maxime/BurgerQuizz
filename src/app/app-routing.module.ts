import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {QuestionsComponent} from "./questions/questions.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {GestionCategorieComponent} from './gestion-categorie/gestion-categorie.component';
import { GestionjoueurComponent } from './gestionjoueur/gestionjoueur.component';

const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'question/:id', component:QuestionsComponent},
  {path: 'categorie', component:GestionCategorieComponent},
  {path: 'joueur',component:GestionjoueurComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
