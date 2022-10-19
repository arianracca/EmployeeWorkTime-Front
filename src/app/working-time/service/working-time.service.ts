import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee/employee-form/model/employee';
import { WorkingType } from 'src/app/working-type/model/working-type';
import { environment } from 'src/environments/environment';
import { WorkingTime } from '../model/working-time';

@Injectable({
  providedIn: 'root'
})
export class WorkingTimeService {

  endpoint: string = '/workingtimes';
  constructor(private http: HttpClient) { }

    //Metodo para crear un registro de jornada laboral
    public createWorkingTime(workingTimeRequest: WorkingTime) : Observable<Object>{
      return this.http.post(environment.employeeWorkTime + this.endpoint, workingTimeRequest)
    }

    //Metodo para actualizar la jornada laboral
    public updateWorkingTime(workingTime: WorkingTime, workingTimeRequest: WorkingTime): Observable<Object> {
      return this.http.put(environment.employeeWorkTime + this.endpoint + "/" + workingTime.id, workingTimeRequest);
    }

    //Metodo para eliminar una jornada laboral
    public deleteWorkingTime(workingTimeRequest: WorkingTime): Observable<Object> {
      return this.http.delete(environment.employeeWorkTime + this.endpoint + "/" + workingTimeRequest.id);
    }

    //Metodo para obtener registro de las jornadas laborales
    public findWorkingTime(): Observable<WorkingTime[]>{
      return this.http.get<WorkingTime[]>(environment.employeeWorkTime + this.endpoint);
    }

}
