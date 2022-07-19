import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesSectionComponent } from './our-services-section.component';

describe('OurServicesSectionComponent', () => {
  let component: OurServicesSectionComponent;
  let fixture: ComponentFixture<OurServicesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
