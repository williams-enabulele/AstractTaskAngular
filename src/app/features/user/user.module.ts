import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    UserRoutingModule
  ]
})
export class UserModule { }
