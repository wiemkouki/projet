import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCmdeComponent } from './crud-cmde.component';

describe('CrudCmdeComponent', () => {
  let component: CrudCmdeComponent;
  let fixture: ComponentFixture<CrudCmdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudCmdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCmdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
