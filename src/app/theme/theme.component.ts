import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { FormControl , FormGroup } from '@angular/forms';
import { Theme } from '../models/theme';
import { ThemeService } from '../services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestionjoueur',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  Themes: Theme[] = [];
  tmp:number=3
  form: FormGroup = new FormGroup({
    libelle: new FormControl(''),

  });

  constructor(private ThemesService: ThemeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refresh()
  }
  refresh(){
    this.ThemesService.getAllThemes().subscribe(Themes => {
      this.Themes = Themes;
    });

  }
  addTheme(): boolean {
    const val: any = this.form.value;
    this.ThemesService.addTheme(
      {
  id_theme : this.Themes.length+this.tmp,
  libelle: val.libelle
}
    );
    this.refresh()
    this.tmp+=1
    return true;
  }
  getAllTheme():Observable<Theme>{
    return this.getAllTheme()
  }

}

