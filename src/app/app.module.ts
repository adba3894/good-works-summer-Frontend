import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {MainHeaderComponent} from './main-header/main-header.component';
import {RegistrationComponent} from './registration/registration.component';
import {SuccessPageComponent} from './registration/success-page/success-page.component';
import {MainPageCarouselComponent} from './main-page/main-page-carousel/main-page-carousel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration/success', component: SuccessPageComponent},
  {path: 'home', component: MainPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RegistrationComponent,
    SuccessPageComponent,
    RegistrationComponent,
    MainPageCarouselComponent,
    PageNotFoundComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    [RouterModule],
    [MainHeaderComponent]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
