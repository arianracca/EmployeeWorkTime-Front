import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WorkingType } from '../model/working-type';

@Injectable({
  providedIn: 'root'
})
export class WorkingTypeService {

  endpoint: string = '/workingtypes';
  constructor(private http: HttpClient) { }


  //Metodo para crear un registro de tipo de turno
  public createWorkingType(workingTypeRequest: WorkingType) : Observable<Object>{
    return this.http.post(environment.employeeWorkTime + this.endpoint, workingTypeRequest)
  }

  //Metodo para obtener registro de los tipos de turno
  public findWorkingType(): Observable<WorkingType[]>{
    return this.http.get<WorkingType[]>(environment.employeeWorkTime + this.endpoint);
  }
}
