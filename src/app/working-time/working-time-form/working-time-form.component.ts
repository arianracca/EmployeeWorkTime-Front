import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertmsgComponent } from 'src/app/core/alertmsg/alertmsg.component';
import { ConfirmationComponent } from 'src/app/core/confirmation/confirmation.component';
import { Employee } from 'src/app/employee/employee-form/model/employee';
import { EmployeeService } from 'src/app/employee/service/employee.service';
import { WorkingType } from 'src/app/working-type/model/working-type';
import { WorkingTypeService } from 'src/app/working-type/service/working-type.service';
import { WorkingTime } from '../model/working-time';
import { WorkingTimeService } from '../service/working-time.service';
import { WorkingTimeEditorComponent } from '../working-time-editor/working-time-editor.component';


@Component({
  selector: 'app-working-time-form',
  templateUrl: './working-time-form.component.html',
  styleUrls: ['./working-time-form.component.css']
})
export class WorkingTimeFormComponent implements OnInit {


  form = new FormGroup({
    employee: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required])
  })

  alert: AlertmsgComponent = new AlertmsgComponent();
  workingTimeList: WorkingTime[] = [];
  employeeList: Employee[] = [];
  workingTypeList: WorkingType[] = [];

  constructor(private readonly fb:FormBuilder,
    private employeeService: EmployeeService,
    private workingTypeService: WorkingTypeService,
    private workingTimeService: WorkingTimeService,
    public dialog: MatDialog,) { }


  initForm() {
    this.form = this.fb.group({
      employee: ['', [Validators.required]],
      type: ['', [Validators.required]],
      date: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]]
    })
  }

  //Método para listar las jornadas laborales
  listWorkingTime() {
    this.workingTimeService.findWorkingTime().subscribe(res => {
      this.workingTimeList = res;
    })
  }

  //Método para listar los empleados
  listEmployee() {
    this.employeeService.findEmployee().subscribe(res => {
      this.employeeList = res;
    })
  }

  //Método para listar los tipos de turno
  listWorkingType() {
    this.workingTypeService.findWorkingType().subscribe(res => {
      this.workingTypeList = res;
    })
  }

  //Método para guardar mediante el servicio
  save(){
    this.workingTimeService.createWorkingTime(this.form.value).subscribe(res =>{
      this.form.reset();
      this.listWorkingTime();
      this.alert.alertWithSuccess();
    }, error => this.alert.erroalert()
  )};

  //Método para editar horarios de jornada laboral ya creada (se ejecuta en ventana de dialogo)
  edit(workingTime: WorkingTime) {
       //Abre el dialogo de edición
       const dialog = this.dialog.open(WorkingTimeEditorComponent, {
        height: '340px',
        width: '300px',
        data: workingTime,
      });
      //Actualiza lista tras modificaciones
      dialog.afterClosed().subscribe((res) => {
        if (res) {
          this.listWorkingTime();
          this.alert.alertWithSuccess();
        }
      });
  }

//Metodo para borrar jornadas laborales
  delete(workingTime: WorkingTime) { //Abre dialogo de confirmacion
    const confirm = this.dialog.open(ConfirmationComponent, {
      height: '190px',
      width: '500px',
    });
    //Si se confirma se procede a borrar
    confirm.afterClosed().subscribe((res) => {
      if (res) {
        this.workingTimeService
          .deleteWorkingTime(workingTime)
          .subscribe(() => (this.listWorkingTime(),
          this.alert.alertWithSuccess()
          ));
      } //Si existe algun error se muestra mensaje
    }, error => this.alert.erroalert()
    )}

  ngOnInit(): void {
    this.initForm();
    this.listEmployee();
    this.listWorkingType();
    this.listWorkingTime();
  }

  onSelectionChange(selection: any, control: string): void {
    // Asigno el valor opcional seleccionado a su correspondiente form control
    this.form.controls[control]?.setValue(selection.value);
  }

  onSubmit(){
    this.save();
    this.listWorkingTime();
  }
}
