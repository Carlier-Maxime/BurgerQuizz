import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SelEtPoivreComponent } from './sel-et-poivre/sel-et-poivre.component';
import { JeuComponent } from './jeu/jeu.component';
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EquipesComponent } from './equipes/equipes.component';
import { JouerComponent } from './jouer/jouer.component';
import { ClassementComponent } from './classement/classement.component';
import { ClassementEquipeComponent } from './classement-equipe/classement-equipe.component';
import { DecompteComponent } from './decompte/decompte.component';
import {HeaderComponent} from './header/header.component';
import { VictoireComponent } from './victoire/victoire.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsComponent,
    ReponsesComponent,
    NotFoundComponent,
    GestionCategorieComponent,
    SelEtPoivreComponent,
    JeuComponent,
    JouerComponent,
    ClassementComponent,
    ClassementEquipeComponent,
    EquipesComponent,
    JouerComponent,
    DecompteComponent,
    HeaderComponent,
    VictoireComponent,
    HeaderComponent,
    VictoireComponent,
    HeaderComponent,
    SettingsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
