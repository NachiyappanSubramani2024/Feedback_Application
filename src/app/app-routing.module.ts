// app-routing.module.ts

import { UserDashboardComponent } from './dasboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dasboard/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', component: UserDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', redirectTo: 'user' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
