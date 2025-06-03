import { Routes } from '@angular/router';
import { Inicial } from './telas/inicial/inicial';
import { Login } from './telas/login/login';
import { Cadusu } from './telas/cadusu/cadusu';

export const routes: Routes = [
    {path: '', redirectTo: 'inicial', pathMatch: 'full'},
    {path: 'inicial', component: Inicial},
    {path: 'login', component: Login}, 
    {path: 'cadusu', component: Cadusu}, 
];
