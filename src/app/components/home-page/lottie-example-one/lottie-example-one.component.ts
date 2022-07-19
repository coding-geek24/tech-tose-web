// import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  AfterViewChecked,
  OnInit,
  NgZone,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, BMDestroyEvent, LottieTransferState } from 'ngx-lottie';

@Component({
  selector: 'app-lottie-example-one',
  templateUrl: './lottie-example-one.component.html',
  styleUrls: ['./lottie-example-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class LottieExampleOneComponent implements AfterViewChecked {
  currentAnimationIndex = 0;
  animationOptionList = [
    '../assets/animations/99312-developer-skills.json',
    '../assets/animations/108347-designer.json',
    '../assets/animations/93644-designer-graphic.json',
    '../assets/animations/29826-cybersecurity-animation.json',
  ]

  options!: AnimationOptions;

  shown = true;

  styles: Partial<CSSStyleDeclaration> = {
    margin: '0 auto',
  };

  private animationItem: AnimationItem | null = null;

  constructor(
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) private platformId: string,
    private lottieTransferState: LottieTransferState,
  ) {
    this.createOptions();
  }

  ngAfterViewChecked(): void {
    // Notice that it's not logged every ms
    if (isPlatformBrowser(this.platformId)) {
      console.log('ngAfterViewChecked');
    }
  }

  animationCreated(animationItem: AnimationItem): void {
    NgZone.assertInAngularZone();
    console.log('animationCreated -> ', animationItem);
    this.animationItem = animationItem;
  }

  destroy(destroyEvent: BMDestroyEvent): void {
    NgZone.assertNotInAngularZone();
    console.log('destroy -> ', destroyEvent);
  }

  showAnimation(): void {
    this.shown = true;
  }

  destroyAnimation(): void {
    this.shown = false;
    this.animationItem = null;
  }

  setSpeed(speed: any): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.setSpeed(speed);
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.play();
    });
  }

  pause(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.pause();
    });
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem?.stop();
    });
  }

  shuffleAnimation(): void {
    if (this.currentAnimationIndex === 3) {
      this.currentAnimationIndex = 0;
    } else {
      this.currentAnimationIndex = this.currentAnimationIndex + 1;
    }

  }

  updateAnimation(): void {
    this.shuffleAnimation();
    this.options = {
      path: this.animationOptionList[this.currentAnimationIndex]
    };
  }

  private createOptions(): void {
    const tranferredAnimationData = this.lottieTransferState.get('data.json');

    if (tranferredAnimationData) {
      this.options = {
        animationData: tranferredAnimationData,
      };
    } else {
      this.options = {
        path: '../assets/animations/99312-developer-skills.json',
      };
    }
  }

}
