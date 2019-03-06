import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { MainPageCarouselComponent } from './main-page-carousel/main-page-carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: MainPageCarouselComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration/success', component: SuccessPageComponent},
  {path: 'home', component: MainPageCarouselComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
