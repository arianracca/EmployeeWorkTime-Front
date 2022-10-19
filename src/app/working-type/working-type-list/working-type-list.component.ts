import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertmsgComponent } from 'src/app/core/alertmsg/alertmsg.component';
import { WorkingType } from '../model/working-type';
import { WorkingTypeService } from '../service/working-type.service';


@Component({
  selector: 'app-working-type-list',
  templateUrl: './working-type-list.component.html',
  styleUrls: ['./working-type-list.component.css']
})
export class WorkingTypeListComponent implements OnInit {

  workingTypeList: WorkingType[] = [];
  alert: AlertmsgComponent = new AlertmsgComponent();

  constructor(private readonly fb:FormBuilder, private workingTypeService: WorkingTypeService) { }

    //Método para listar los tipos de turno
    listWorkingType() {
      this.workingTypeService.findWorkingType().subscribe(res => {
        this.workingTypeList = res;
      })
    }


  ngOnInit(): void {
    this.listWorkingType();
  }

}
