import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowupleadComponent } from './flowuplead.component';

describe('FlowupleadComponent', () => {
  let component: FlowupleadComponent;
  let fixture: ComponentFixture<FlowupleadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlowupleadComponent]
    });
    fixture = TestBed.createComponent(FlowupleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
