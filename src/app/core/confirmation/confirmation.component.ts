import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertmsgComponent } from 'src/app/core/alertmsg/alertmsg.component';
import { WorkingTime } from 'src/app/working-time/model/working-time';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(
    public confirm: MatDialogRef<ConfirmationComponent>,
  ) { }

  ngOnInit(): void {
  }

  //Metodo para cancelar accion que se solicita confirmar
  decline() {
    this.confirm.close(false);
  }

  //Metodo para aceptar accion que se solicita confirmar
  accept() {
    this.confirm.close(true);
  }

}
