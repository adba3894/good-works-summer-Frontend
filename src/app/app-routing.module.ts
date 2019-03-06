import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component'
import {SuccessPageComponent} from './success-page/success-page.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration/success', component: SuccessPageComponent}
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
