import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod8Component } from './prod8.component';

describe('Prod8Component', () => {
  let component: Prod8Component;
  let fixture: ComponentFixture<Prod8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
