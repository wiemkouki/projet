import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurdashComponent } from './livreurdash.component';

describe('LivreurdashComponent', () => {
  let component: LivreurdashComponent;
  let fixture: ComponentFixture<LivreurdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
