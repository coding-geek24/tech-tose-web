import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LottieExampleOneComponent } from './components/home-page/lottie-example-one/lottie-example-one.component';

const routes: Routes = [
  { path: 'lottie-demo-one', component: LottieExampleOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
