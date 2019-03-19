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
import { AdminIdeaAddComponent } from './admin-login/admin-idea-add/admin-idea-add.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ProjectPageService } from './services/project-page-service/project-page.service';
import { IdeasPageComponent } from './ideas-page/ideas-page.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard-service/auth-guard.service';
import { FaqPageComponent } from './faq-page/faq-page.component';import { FinishedProjectsPageComponent } from './finished-projects-page/finished-projects-page.component';
import { AdminIdeaComponent } from './admin-login/admin-idea/admin-idea.component';

const routes: Routes = [
  { path: '', component: MainPageCarouselComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration/success', component: SuccessPageComponent },
  { path: 'registration/:organization/:description/:category/:city/:cityId/:id', component: RegistrationComponent} ,
  { path: 'home', component: MainPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'admin', component: AdminLoginComponent},
  { path: 'admin/project', component: AdminProjectComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas/add', component: AdminIdeaAddComponent, canActivate: [AuthGuard] },
  { path: 'admin/ideas', component: AdminIdeaComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectPageComponent},
  { path: 'ideas', component: IdeasPageComponent},
  { path: 'faq', component: FaqPageComponent},
  { path: 'finished', component: FinishedProjectsPageComponent},
  { path: 'good-works-summer-frontend.herokuapp.com/admin', component: AdminLoginComponent },
  { path: 'good-works-summer-frontend.herokuapp.com/**', component: PageNotFoundComponent},
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
    AdminIdeaAddComponent,
    IdeasPageComponent,
    FaqPageComponent,
    FinishedProjectsPageComponent,
    AdminIdeaComponent
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
