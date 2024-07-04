import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewComponent } from './lead-view.component';

describe('LeadViewComponent', () => {
  let component: LeadViewComponent;
  let fixture: ComponentFixture<LeadViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadViewComponent]
    });
    fixture = TestBed.createComponent(LeadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
