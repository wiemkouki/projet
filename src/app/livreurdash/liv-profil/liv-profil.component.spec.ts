import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivProfilComponent } from './liv-profil.component';

describe('LivProfilComponent', () => {
  let component: LivProfilComponent;
  let fixture: ComponentFixture<LivProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
