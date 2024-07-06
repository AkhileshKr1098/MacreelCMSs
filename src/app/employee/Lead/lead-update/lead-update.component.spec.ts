import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadUpdateComponent } from './lead-update.component';

describe('LeadUpdateComponent', () => {
  let component: LeadUpdateComponent;
  let fixture: ComponentFixture<LeadUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadUpdateComponent]
    });
    fixture = TestBed.createComponent(LeadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
