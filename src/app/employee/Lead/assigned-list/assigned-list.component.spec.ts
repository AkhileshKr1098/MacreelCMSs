import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedListComponent } from './assigned-list.component';

describe('AssignedListComponent', () => {
  let component: AssignedListComponent;
  let fixture: ComponentFixture<AssignedListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedListComponent]
    });
    fixture = TestBed.createComponent(AssignedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
