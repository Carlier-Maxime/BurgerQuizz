import { JouerComponent } from './jouer/jouer.component';
import { JeuComponent } from './jeu/jeu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionsComponent} from './questions/questions.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {GestionCategorieComponent} from './gestion-categorie/gestion-categorie.component';
import {EquipesComponent} from './equipes/equipes.component';
import {ClassementEquipeComponent} from './classement-equipe/classement-equipe.component';
import {ClassementComponent} from './classement/classement.component';
import {SettingsComponent} from './settings/settings.component';

const routes: Routes = [
  {path: 'question/:id', component: QuestionsComponent},
  {path: 'jeu/:id', component: JouerComponent},
  {path: '', component : JeuComponent},
  {path: 'categorie', component: GestionCategorieComponent},
  {path: 'equipes', component: EquipesComponent},
  {path: 'classement', component: ClassementComponent},
  {path: 'classement-equipe', component: ClassementEquipeComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
