import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsQuestionsComponent } from './gestions-questions.component';

describe('GestionsQuestionsComponent', () => {
  let component: GestionsQuestionsComponent;
  let fixture: ComponentFixture<GestionsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
