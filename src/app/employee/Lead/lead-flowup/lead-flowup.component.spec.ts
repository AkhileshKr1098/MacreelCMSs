import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadFlowupComponent } from './lead-flowup.component';

describe('LeadFlowupComponent', () => {
  let component: LeadFlowupComponent;
  let fixture: ComponentFixture<LeadFlowupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadFlowupComponent]
    });
    fixture = TestBed.createComponent(LeadFlowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
