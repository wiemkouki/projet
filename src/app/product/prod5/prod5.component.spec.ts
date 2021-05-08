import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod5Component } from './prod5.component';

describe('Prod5Component', () => {
  let component: Prod5Component;
  let fixture: ComponentFixture<Prod5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prod5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
