import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';

import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./myrouting/myrouting.module').then((m) => m.MyroutingModule),
    // loadChildren:()=>import('./app/myrouting/myrouting.module#MyroutingModule')

    // label: 'Home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  { path: 'register', component: RegisterComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
