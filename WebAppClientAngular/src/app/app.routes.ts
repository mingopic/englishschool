import { AuthGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./app.layout.routes').then(m => m.Layout_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  }
];

