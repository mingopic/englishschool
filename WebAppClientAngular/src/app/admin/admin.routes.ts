import { Routes } from '@angular/router';
import { UseradminComponent } from './useradmin/useradmin.component';
import { StudentsComponent } from './students/students.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'users', component: UseradminComponent},
  { path: 'students', component: StudentsComponent}
];
