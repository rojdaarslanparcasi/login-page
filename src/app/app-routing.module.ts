import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/accounts/register/register.component';
import { ResetPasswordComponent } from './view/accounts/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'accounts/register',
    component: RegisterComponent,
  },
  {
    path: 'accounts/password/reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
