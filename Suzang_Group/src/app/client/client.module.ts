import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientMainComponent } from './client-main/client-main.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ClientsComponent } from './clients/clients.component';



@NgModule({
  declarations: [
    ClientMainComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule
  ],
 
  
})
export class ClientModule { }
