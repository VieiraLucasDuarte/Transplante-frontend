import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login-component';
import { DashboardComponent } from './dashboard/dashboard-component';
import { DadosSaudeComponent } from './features/dados-saude-component/dados-saude-component';
import { HistoricoComponent } from './features/historico/historico-component/historico-component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'saude', component: DadosSaudeComponent},
    { path: 'historico', component: HistoricoComponent },
];
