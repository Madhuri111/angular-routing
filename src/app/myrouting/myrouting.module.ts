import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { MyroutingRoutingModule } from './myrouting-routing.module';
import { ChangeComponent } from '../change/change.component';
import { CustomComponent } from '../custom/custom.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { FinalFormComponent } from '../final-form/final-form.component';
import { ImpurePipesComponent } from '../impure-pipes/impure-pipes.component';
import { PipesComponent } from '../pipes/pipes.component';
import { TemplateFormComponent } from '../template-form/template-form.component';
import { TryComponent } from '../try/try.component';
import { CreateformComponent } from '../createform/createform.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { ImpPipePipe } from '../impure-pipes/imp-pipe.pipe';
import { IfDirective } from '../custom/if.directive';
import { HighlightPipe } from '../pipes/highlight.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Basictemplate } from '../createform/basictemplate.component';
@NgModule({
  declarations: [
    ChangeComponent,
    CustomComponent,
    DynamicComponent,
    FinalFormComponent,
    ImpurePipesComponent,
    PipesComponent,
    TemplateFormComponent,
    TryComponent,
    FinalFormComponent,
    CreateformComponent,
    ReactiveFormComponent,
    ImpPipePipe,
    IfDirective,
    HighlightPipe,
    Basictemplate,
  ],
  imports: [
    PickerModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    CommonModule,
    MyroutingRoutingModule,
    MatSelectModule,
    // BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatMenuModule,
    // BrowserModule,
    FormsModule,
  ],
})
export class MyroutingModule {}
