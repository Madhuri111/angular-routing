import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeComponent } from 'src/app/change/change.component';
import { CustomComponent } from 'src/app/custom/custom.component';
import { DynamicComponent } from 'src/app/dynamic/dynamic.component';
import { FinalFormComponent } from 'src/app/final-form/final-form.component';
import { ImpurePipesComponent } from 'src/app/impure-pipes/impure-pipes.component';
import { PipesComponent } from 'src/app/pipes/pipes.component';
import { TemplateFormComponent } from 'src/app/template-form/template-form.component';
import { TryComponent } from 'src/app/try/try.component';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { ProjectsComponent } from './projects/projects.component';
// import { ProjectsComponent } from './projects/projects.component';

export const routess = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'custom',
        component: CustomComponent,
        label: 'custom',
        canActivate: [AuthGuard],
      },

      {
        path: 'pipes',
        component: PipesComponent,
        label: 'Pure Pipes',
        canActivate: [AuthGuard],
      },
      {
        path: 'impure',
        component: ImpurePipesComponent,
        label: 'Impure Pipes',
        canActivate: [AuthGuard],
      },
      {
        path: 'dynamic',
        component: DynamicComponent,
        label: 'Dynamic',
        canActivate: [AuthGuard],
      },

      {
        path: 'change',
        component: ChangeComponent,
        label: 'change',
        canActivate: [AuthGuard],
      },
      {
        path: 'template',
        component: TemplateFormComponent,
        label: 'template forms',
        canActivate: [AuthGuard],
      },
      {
        path: 'dynamicforms',
        component: TryComponent,
        label: 'dynamic forms',
        canActivate: [AuthGuard],
      },

      {
        path: 'modelform',
        component: FinalFormComponent,
        label: 'model forms',
        canActivate: [AuthGuard],
      },

      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routess)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
