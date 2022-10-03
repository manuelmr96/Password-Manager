import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCardsComponent } from './password-cards.component';

describe('PasswordCardsComponent', () => {
  let component: PasswordCardsComponent;
  let fixture: ComponentFixture<PasswordCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
