import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod7Component } from './prod7.component';

describe('Prod7Component', () => {
  let component: Prod7Component;
  let fixture: ComponentFixture<Prod7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
