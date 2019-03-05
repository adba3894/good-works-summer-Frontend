import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageCarouselComponent } from './main-page-carousel/main-page-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    RegistrationComponent,
    MainPageCarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
