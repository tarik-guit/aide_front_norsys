import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyeventComponent } from './dailyevent.component';

describe('DailyeventComponent', () => {
  let component: DailyeventComponent;
  let fixture: ComponentFixture<DailyeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
