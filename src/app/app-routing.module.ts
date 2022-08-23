import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';
import { ProjectsModule } from './projects/projects.module';
import { RegisterComponent } from './register/register.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],

    // loadChildren:()=>import('./app/myrouting/myrouting.module#MyroutingModule')

    // label: 'Home',
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(`./projects/projects.module`).then((m) => m.ProjectsModule),
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
  exports: [RouterModule],
})
export class AppRoutingModule {}
