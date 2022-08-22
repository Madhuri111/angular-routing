import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { fakeBackendProvider } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';

import { CustomComponent } from './custom/custom.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ImpurePipesComponent } from './impure-pipes/impure-pipes.component';
import { PipesComponent } from './pipes/pipes.component';
import { RouterModule } from '@angular/router';
import { HighlightPipe } from './pipes/highlight.pipe';
import { ImpPipePipe } from './impure-pipes/imp-pipe.pipe';
import { ChangeComponent } from './change/change.component';
import { FormsModule } from '@angular/forms';
import { IfDirective } from './custom/if.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { ImpPipePipe } from './impure-pipes/imp-pipe.pipe';
import { MatSliderModule } from '@angular/material/slider';
// import {MatCardModule} from '@angular/material/card';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
// import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatOptionModule } from '@angular/material/core';
import { TryComponent } from './try/try.component';
import { CreateformComponent } from './createform/createform.component';
// import { CreateformComponent } from './createform/createform.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { Basictemplate } from './createform/basictemplate.component';
import { FinalFormComponent } from './final-form/final-form.component';
import { MatSelectionList } from '@angular/material/list';

import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './register/register.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    // Basictemplate,
    // HighlightPipe,
    // TryComponent,
    // AppComponent,
    // CustomComponent,
    // DynamicComponent,
    // ImpurePipesComponent,
    // PipesComponent,
    // ImpPipePipe,
    // ChangeComponent,
    // IfDirective,
    // TemplateFormComponent,
    // ReactiveFormComponent,
    // TryComponent,
    // CreateformComponent,
    // FinalFormComponent,
  ],
  imports: [
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
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
