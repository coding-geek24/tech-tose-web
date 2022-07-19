import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieExampleOneComponent } from './lottie-example-one.component';

describe('LottieExampleOneComponent', () => {
  let component: LottieExampleOneComponent;
  let fixture: ComponentFixture<LottieExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottieExampleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
