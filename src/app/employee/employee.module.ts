import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeService } from './service/employee.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    EmployeeFormComponent
  ]
})
export class EmployeeModule { }
