import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { Employee } from './model/employee';
import { CoreModule } from 'src/app/core/core.module';
import { AlertmsgComponent } from 'src/app/core/alertmsg/alertmsg.component';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl('', [Validators.required])
  })

  employeeList: Employee[] = [];
  alert: AlertmsgComponent = new AlertmsgComponent();

  constructor(private readonly fb:FormBuilder, private employeeService:EmployeeService) {}

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phoneNumber: ['', [Validators.required]]
    })
  }

  //Metodo que sirve para implementar chequeos de validez en el template
  get f() {
    return this.form.controls
  }

  //Método para listar los empleados via servicio
  listEmployee() {
    this.employeeService.findEmployee().subscribe(res => {
      this.employeeList = res;
    })
  }

  //Método para guardar empleadp mediante el servicio
  save(){
    this.employeeService.createEmployee(this.form.value).subscribe(res =>{
      this.form.reset();
      this.listEmployee();
      this.alert.alertWithSuccess();
    }, error => this.alert.erroalert()
  )};

  ngOnInit(): void {
    this.initForm();
    this.listEmployee();
  }

  onSubmit(){
    this.save();
    this.listEmployee();
  }
}



