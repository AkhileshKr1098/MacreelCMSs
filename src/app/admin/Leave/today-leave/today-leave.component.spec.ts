import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayLeaveComponent } from './today-leave.component';

describe('TodayLeaveComponent', () => {
  let component: TodayLeaveComponent;
  let fixture: ComponentFixture<TodayLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayLeaveComponent]
    });
    fixture = TestBed.createComponent(TodayLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
