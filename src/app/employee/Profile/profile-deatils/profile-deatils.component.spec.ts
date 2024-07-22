import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeatilsComponent } from './profile-deatils.component';

describe('ProfileDeatilsComponent', () => {
  let component: ProfileDeatilsComponent;
  let fixture: ComponentFixture<ProfileDeatilsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileDeatilsComponent]
    });
    fixture = TestBed.createComponent(ProfileDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
