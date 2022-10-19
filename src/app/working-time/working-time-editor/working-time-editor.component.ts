import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertmsgComponent } from 'src/app/core/alertmsg/alertmsg.component';
import { WorkingTime } from '../model/working-time';
import { WorkingTimeService } from '../service/working-time.service';

@Component({
  selector: 'app-working-time-editor',
  templateUrl: './working-time-editor.component.html',
  styleUrls: ['./working-time-editor.component.css']
})
export class WorkingTimeEditorComponent implements OnInit {

  form = new FormGroup({
  startTime: new FormControl('', [Validators.required]),
  endTime: new FormControl('', [Validators.required])
})

  alert: AlertmsgComponent = new AlertmsgComponent();
  constructor(
    private fb: FormBuilder,
    private workingTimeService: WorkingTimeService,
    public dialog: MatDialogRef<WorkingTimeEditorComponent>,
    @Inject(MAT_DIALOG_DATA) public workingTime: WorkingTime) { }

    //Metodo para chequear validacion completa de formulario
  formValid(): boolean { //Comparo los horarios de entrada y salida para verificar validez
    const start = this.form.value.startTime.toString().split(':')[0];
    const end = this.form.value.endTime.toString().split(':')[0];
    return this.form.valid && start < end;
  }


//Metodo para cerrar sin gaurdar
close() {
    this.dialog.close();
}

  ngOnInit(): void {
      this.form = this.fb.group({
        startTime: ['', [Validators.required]],
        endTime: ['', [Validators.required]],
      });
    }

  onSubmit() {
    if (!this.formValid()) {
      this.alert.erroalert();
    }
    //Realiza modificación via service y cierra dialogo
    this.workingTimeService.updateWorkingTime(this.workingTime, this.form.value).subscribe({
      next: () => this.dialog.close(this.form.value)
    });

  }

}



