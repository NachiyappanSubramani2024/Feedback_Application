
  import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { UserDashboardComponent } from './app/dasboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './app/dasboard/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'user', component: UserDashboardComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: '**', redirectTo: 'user' },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})