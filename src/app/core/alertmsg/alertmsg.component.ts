import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { WorkingTime } from 'src/app/working-time/model/working-time';
import { WorkingTimeService } from 'src/app/working-time/service/working-time.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertmsg',
  templateUrl: './alertmsg.component.html',
  styleUrls: ['./alertmsg.component.css']
})
export class AlertmsgComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  simpleAlert() {
    Swal.fire('');
  }

  alertWithSuccess() {
    Swal.fire('Gracias...', 'Envío exitoso!', 'success');
  }
  erroalert() {
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'Algo salió mal!',
      footer: '',
    });
  }
  topend() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Guardado!',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  confirmBox() {
    Swal.fire({
      title: 'Está seguro de confirmar esta acción?',
      text: "No podrá revertirla!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, acepto',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Realizado!',
          'El cambio fue realizado.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'No se han realizado cambios', 'error');
      }
    });
  }

  ajax_request() {
    Swal.fire({
      title: 'Submit your Github username',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  }
}
