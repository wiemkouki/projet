import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSScatComponent } from './crud-sscat.component';

describe('CrudSScatComponent', () => {
  let component: CrudSScatComponent;
  let fixture: ComponentFixture<CrudSScatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudSScatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSScatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
