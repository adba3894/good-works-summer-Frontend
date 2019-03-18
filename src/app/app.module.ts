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
import { AdminProjectComponent } from './admin-login/admin-project/admin-project.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminIdeaComponent } from './admin-login/admin-idea/admin-idea.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectPageService } from './services/project-page-service/project-page.service';
import { IdeasPageComponent } from './ideas-page/ideas-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard-service/auth-guard.service';
import { FaqPageComponent } from './faq-page/faq-page.component';

const routes: Routes = [
  { path: '', component: MainPageCarouselComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/success', component: SuccessPageComponent },
  { path: 'registration/:organization/:description/:category', component: RegistrationComponent} ,
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/project', component: AdminProjectComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas', component: AdminIdeaComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectPageComponent},
  { path: 'ideas', component: IdeasPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'https://good-works-summer-frontend.herokuapp.com/admin', component: AdminLoginComponent },
  { path: 'https://good-works-summer-frontend.herokuapp.com/**', component: PageNotFoundComponent},
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
    AdminIdeaComponent,
    IdeasPageComponent,
    FaqPageComponent
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
  providers: [JobRegistrationService, ProjectPageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
