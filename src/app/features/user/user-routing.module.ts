import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/auth.guard';
import { UserComponent as UserLayout } from '../../layout/user/user.component';
import { Role } from '../auth/types/Role';
import { DashboardComponent } from '../user/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayout,
    canActivate: [AuthGuard],
    data: { role: Role.User },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
