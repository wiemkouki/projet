import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocValidComponent } from './doc-valid.component';

describe('DocValidComponent', () => {
  let component: DocValidComponent;
  let fixture: ComponentFixture<DocValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
