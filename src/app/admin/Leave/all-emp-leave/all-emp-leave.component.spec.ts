import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmpLeaveComponent } from './all-emp-leave.component';

describe('AllEmpLeaveComponent', () => {
  let component: AllEmpLeaveComponent;
  let fixture: ComponentFixture<AllEmpLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEmpLeaveComponent]
    });
    fixture = TestBed.createComponent(AllEmpLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
