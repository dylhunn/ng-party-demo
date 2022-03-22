import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyFormsComponent } from './party-forms.component';

describe('PartyFormsComponent', () => {
  let component: PartyFormsComponent;
  let fixture: ComponentFixture<PartyFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartyFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
