import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: Login,
        data: {
            title: 'Login Page',
        },
    },
    {
        path: 'dashboard',
        component: Dashboard,
        data: {
            title: 'Dashboard Page',
        },
    },
    { path: '**', redirectTo: 'dashboard' },
];
