import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusUpdateLeadComponent } from './status-update-lead.component';

describe('StatusUpdateLeadComponent', () => {
  let component: StatusUpdateLeadComponent;
  let fixture: ComponentFixture<StatusUpdateLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusUpdateLeadComponent]
    });
    fixture = TestBed.createComponent(StatusUpdateLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
