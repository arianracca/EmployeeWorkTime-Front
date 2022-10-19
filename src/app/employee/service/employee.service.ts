import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../employee-form/model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  endpoint: string = '/employees';
  constructor(private http: HttpClient) { }

  //Metodo para crear un registro de empleado
  public createEmployee(employeeRequest: Employee) : Observable<Object>{
    return this.http.post(environment.employeeWorkTime + this.endpoint, employeeRequest)
  }

  //Metodo para obtener registro de los empleados
  public findEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(environment.employeeWorkTime + this.endpoint);
  }

  //Metodos escritos para futura implementacion
/*   //Metodo para obtener o buscar un empleado por id
  findEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(environment.employeeWorkTime + this.endpoint+ id);
  } */

/*   //Metodo para actualizar el empleado
  updateEmployee(id:number,employee:Employee) : Observable<Object>{
    return this.http.put(environment.employeeWorkTime + this.endpoint, employee);
  }*/


}
