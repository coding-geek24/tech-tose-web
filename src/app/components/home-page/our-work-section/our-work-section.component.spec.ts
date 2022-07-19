import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkSectionComponent } from './our-work-section.component';

describe('OurWorkSectionComponent', () => {
  let component: OurWorkSectionComponent;
  let fixture: ComponentFixture<OurWorkSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorkSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
