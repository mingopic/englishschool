import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

export const Layout_ROUTES: Routes = [
  {
    path: '', component: LayoutComponent, children:
    [
      { path: 'admin', loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES) },
      { path: 'student', loadChildren: () => import('./student/student.routes').then(m => m.STUDENT_ROUTES) }
    ]
  }
];
