import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifLivComponent } from './notif-liv.component';

describe('NotifLivComponent', () => {
  let component: NotifLivComponent;
  let fixture: ComponentFixture<NotifLivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifLivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifLivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
