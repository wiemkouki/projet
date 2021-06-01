import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocComponent } from './crud-doc.component';

describe('CrudDocComponent', () => {
  let component: CrudDocComponent;
  let fixture: ComponentFixture<CrudDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
