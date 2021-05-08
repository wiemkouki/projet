import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod6Component } from './prod6.component';

describe('Prod6Component', () => {
  let component: Prod6Component;
  let fixture: ComponentFixture<Prod6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
