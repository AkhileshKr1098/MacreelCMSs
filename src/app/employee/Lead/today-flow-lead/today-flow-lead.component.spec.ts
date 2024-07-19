import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayFlowLeadComponent } from './today-flow-lead.component';

describe('TodayFlowLeadComponent', () => {
  let component: TodayFlowLeadComponent;
  let fixture: ComponentFixture<TodayFlowLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodayFlowLeadComponent]
    });
    fixture = TestBed.createComponent(TodayFlowLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
