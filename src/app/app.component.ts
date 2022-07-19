import { Component, OnInit, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'tech-tose-web';
  constructor() { }

  ngOnInit(): void {
    // console.log
  }

  ngAfterViewInit(): void {
    const leftgear: HTMLElement = (<HTMLInputElement>document.getElementById("logo_id"));
    window.addEventListener("scroll", function() {
      console.log('window.pageYOffset', window.pageYOffset);
      const _deg = ((window.pageYOffset*0.01 % 8)*45) % 360;
      console.log('_deg===>',_deg);
        leftgear.style.transform = "rotate("+_deg+"deg)";
    });

    // on stop scroll
    fromEvent<any>(window, 'scroll')
      .pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe((event: any) => {
        leftgear.style.transform = "rotate("+360+"deg)";
      });
  }
}
