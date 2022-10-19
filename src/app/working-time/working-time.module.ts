import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { WorkingTimeFormComponent } from './working-time-form/working-time-form.component';
import { EmployeeModule } from '../employee/employee.module';
import { WorkingTypeModule } from '../working-type/working-type.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { core } from '@angular/compiler';
import { WorkingTimeEditorComponent } from './working-time-editor/working-time-editor.component';



@NgModule({
  declarations: [WorkingTimeFormComponent, WorkingTimeEditorComponent],
  imports: [
    CoreModule,
    CommonModule,
    BrowserModule,
    CoreModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    WorkingTypeModule,
    HttpClientModule,

    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule

  ],
  exports:[
    WorkingTimeFormComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
})
export class WorkingTimeModule { }
