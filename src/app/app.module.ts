import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { GestionCategorieComponent } from './gestion-categorie/gestion-categorie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GestionjoueurComponent } from './gestionjoueur/gestionjoueur.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsComponent,
    ReponsesComponent,
    NotFoundComponent,
    GestionCategorieComponent,
    GestionjoueurComponent
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
