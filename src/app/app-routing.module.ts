import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'troca',
    loadChildren: () => import('./troca/troca.module').then(m => m.TrocaPageModule)
  },
  {
    path: 'servico',
    loadChildren: () => import('./servico/servico.module').then(m => m.ServicoPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then(m => m.AgendamentoPageModule)
  },
  {
    path: 'perfila',
    loadChildren: () => import('./perfila/perfila.module').then(m => m.PerfilaPageModule),
    canActivate: [adminGuard]
  },
  {
    path: 'not-authorized',
    loadChildren: () => import('./not-authorized/not-authorized.module').then(m => m.NotAuthorizedPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
