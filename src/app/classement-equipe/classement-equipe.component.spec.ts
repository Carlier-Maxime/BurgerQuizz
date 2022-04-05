import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassementEquipeComponent } from './classement-equipe.component';

describe('ClassementEquipeComponent', () => {
  let component: ClassementEquipeComponent;
  let fixture: ComponentFixture<ClassementEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassementEquipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassementEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
