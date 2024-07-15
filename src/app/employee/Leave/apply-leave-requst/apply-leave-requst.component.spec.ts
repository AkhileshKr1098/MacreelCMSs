import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeaveRequstComponent } from './apply-leave-requst.component';

describe('ApplyLeaveRequstComponent', () => {
  let component: ApplyLeaveRequstComponent;
  let fixture: ComponentFixture<ApplyLeaveRequstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyLeaveRequstComponent]
    });
    fixture = TestBed.createComponent(ApplyLeaveRequstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
