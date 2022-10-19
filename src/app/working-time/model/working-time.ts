import { Employee } from "src/app/employee/employee-form/model/employee";
import { WorkingType } from "src/app/working-type/model/working-type";

export interface WorkingTime{
  id?: number;
  employee: Employee;
  type: WorkingType;
  date: Date | string;
  startTime: Date | string;
  endTime: Date | string;
  hours?: number;
}
