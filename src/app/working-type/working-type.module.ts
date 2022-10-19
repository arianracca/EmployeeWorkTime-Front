import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingTypeListComponent } from './working-type-list/working-type-list.component';
import { CoreModule } from '../core/core.module';
import { WorkingType } from './model/working-type';
import { WorkingTypeService } from './service/working-type.service';



@NgModule({
  declarations: [
    WorkingTypeListComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [WorkingTypeListComponent]
})
export class WorkingTypeModule { }
