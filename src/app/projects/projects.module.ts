import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ChangeComponent } from '../change/change.component';
import { Basictemplate } from '../createform/basictemplate.component';
import { CreateformComponent } from '../createform/createform.component';
import { CustomComponent } from '../custom/custom.component';
import { IfDirective } from '../custom/if.directive';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { FinalFormComponent } from '../final-form/final-form.component';
import { ImpPipePipe } from '../impure-pipes/imp-pipe.pipe';
import { ImpurePipesComponent } from '../impure-pipes/impure-pipes.component';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { PipesComponent } from '../pipes/pipes.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { TemplateFormComponent } from '../template-form/template-form.component';
import { TryComponent } from '../try/try.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    ProjectsComponent,
    Basictemplate,
    HighlightPipe,
    TryComponent,
    CustomComponent,
    DynamicComponent,
    ImpurePipesComponent,
    PipesComponent,
    ImpPipePipe,
    ChangeComponent,
    IfDirective,
    TemplateFormComponent,
    ReactiveFormComponent,
    CreateformComponent,
    FinalFormComponent,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    PickerModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatNativeDateModule,
    MatListModule,
    MatOptionModule,
    MatSidenavModule,
    // BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([]),
    // BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    // HttpClientModule,
    MatFormFieldModule,
  ],
})
export class ProjectsModule {}
