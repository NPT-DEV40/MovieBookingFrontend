import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReleasesPageComponent } from './new-releases-page.component';

describe('NewReleasesPageComponent', () => {
  let component: NewReleasesPageComponent;
  let fixture: ComponentFixture<NewReleasesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewReleasesPageComponent]
    });
    fixture = TestBed.createComponent(NewReleasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
