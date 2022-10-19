import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertmsgComponent } from './alertmsg/alertmsg.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [NavbarComponent,
  AlertmsgComponent,
  ConfirmationComponent
],
  imports: [
    CommonModule,
  ],
  exports: [NavbarComponent,
    AlertmsgComponent,
    ConfirmationComponent
]
})
export class CoreModule { }
