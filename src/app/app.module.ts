import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LottieModule, LottieCacheModule } from 'ngx-lottie';
import player from 'lottie-web';
import { LottieExampleOneComponent } from './components/home-page/lottie-example-one/lottie-example-one.component';
import { HomeLightComponent } from './components/home-page/home-light/home-light.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { OurServicesSectionComponent } from './components/home-page/our-services-section/our-services-section.component';
import { OurWorkSectionComponent } from './components/home-page/our-work-section/our-work-section.component';
import { OurBlogSectionComponent } from './components/home-page/our-blog-section/our-blog-section.component';
import { FooterComponent } from './components/shared/footer/footer.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LottieExampleOneComponent,
    HomeLightComponent,
    HeaderComponent,
    OurServicesSectionComponent,
    OurWorkSectionComponent,
    OurBlogSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
