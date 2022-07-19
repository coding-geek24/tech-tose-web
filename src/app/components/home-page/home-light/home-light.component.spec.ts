import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLightComponent } from './home-light.component';

describe('HomeLightComponent', () => {
  let component: HomeLightComponent;
  let fixture: ComponentFixture<HomeLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
