import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdeComponent } from './cmde.component';

describe('CmdeComponent', () => {
  let component: CmdeComponent;
  let fixture: ComponentFixture<CmdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
