import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdashComponent } from './supdash.component';

describe('SupdashComponent', () => {
  let component: SupdashComponent;
  let fixture: ComponentFixture<SupdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
