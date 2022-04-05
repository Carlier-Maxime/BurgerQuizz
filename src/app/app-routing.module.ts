import { JouerComponent } from './jouer/jouer.component';
import { JeuComponent } from './jeu/jeu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';

const routes: Routes = [
  { path: '', component: JeuComponent },
  { path: 'jeu/:id', component: JouerComponent },
  { path: 'jeu', component: JeuComponent },
  { path: 'categorie', component: GestionCategorieComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
