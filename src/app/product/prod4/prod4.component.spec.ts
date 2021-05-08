import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod4Component } from './prod4.component';

describe('Prod4Component', () => {
  let component: Prod4Component;
  let fixture: ComponentFixture<Prod4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
