import { Routes } from '@angular/router';
import { Inicial } from './telas/inicial/inicial';
import { Cadusu } from './telas/cadusu/cadusu';
import { Principal } from './telas/principal/principal';
import { AuthGuard } from './service/auth.guard';
import { Login } from './telas/login/login';
import { CadastroEmpresa } from './telas/cademp/cademp';

export const routes: Routes = [
  { path: '', redirectTo: 'inicial', pathMatch: 'full' },
  { path: 'inicial', component: Inicial },
  { path: 'login', component: Login },
  { path: 'cadusu', component: Cadusu },
  { path: 'cademp', component: CadastroEmpresa, canActivate: [AuthGuard] },
  { path: 'principal', component: Principal, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'inicial' }
];