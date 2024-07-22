import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermandCondationComponent } from './termand-condation.component';

describe('TermandCondationComponent', () => {
  let component: TermandCondationComponent;
  let fixture: ComponentFixture<TermandCondationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermandCondationComponent]
    });
    fixture = TestBed.createComponent(TermandCondationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
