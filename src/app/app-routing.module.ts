import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { WorkingTime } from './working-time/model/working-time';
import { WorkingTimeFormComponent } from './working-time/working-time-form/working-time-form.component';
import { WorkingTypeListComponent } from './working-type/working-type-list/working-type-list.component';

const routes: Routes = [
      //Aca ingreso las rutas con el par: path: "formulario", component: FormularioComponent

  {
    path: "employees",
    component: EmployeeFormComponent
  },
  {
    path: "workingtypes",
    component: WorkingTypeListComponent
  },
  {
    path: "workingtimes",
    component: WorkingTimeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
