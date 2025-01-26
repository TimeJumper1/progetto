import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './AuthGuard';
import {CustomersComponent} from "./customers/customers.component";
import {CommonModule} from "@angular/common";
import {CustomersRoutingModule} from "./customers/customers-routing.module";

const routes: Routes = [

  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,
    CustomersRoutingModule],
  exports: [RouterModule],


})
export class AppRoutingModule { }
