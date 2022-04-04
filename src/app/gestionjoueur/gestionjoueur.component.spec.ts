import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionjoueurComponent } from './gestionjoueur.component';

describe('GestionjoueurComponent', () => {
  let component: GestionjoueurComponent;
  let fixture: ComponentFixture<GestionjoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionjoueurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionjoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
