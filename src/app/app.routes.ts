import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login-component';
import { DashboardComponent } from './dashboard-component/dashboard-component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];
