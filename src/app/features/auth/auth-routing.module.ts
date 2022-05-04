import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent as AuthLayout } from 'src/app/layout/auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
  path: '',
  component: AuthLayout,
  children: [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path:'login', component: LoginComponent},
    { path:'register', component: RegisterComponent}
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
