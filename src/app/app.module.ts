import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessPageComponent } from './registration/success-page/success-page.component';
import { MainPageCarouselComponent } from './main-page/main-page-carousel/main-page-carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { JobRegistrationService } from './services/job-registration-service/job-registration.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProjectComponent } from './admin-login/admin-project/admin-project.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectPageService } from './services/project-page-service/project-page.service';

const routes: Routes = [
  { path: '', component: MainPageCarouselComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/success', component: SuccessPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/project', component: AdminProjectComponent },
  { path: 'project', component: ProjectPageComponent},
  { path: '**', component: PageNotFoundComponent }
];


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
    AdminLoginComponent,
    AdminProjectComponent,
    ProjectPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    [RouterModule],
    [MainHeaderComponent]
  ],
  providers: [JobRegistrationService, ProjectPageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
