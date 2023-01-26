import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoupensRoutingModule } from './coupens-routing.module';
import { CoupensComponent } from './coupens.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CoupenListComponent } from './coupen-list/coupen-list.component';


@NgModule({
  declarations: [
    CoupensComponent,
    CoupenListComponent
  ],
  imports: [
    CommonModule, 
    CoupensRoutingModule,
    AppRoutingModule, 
    HttpClientModule,
  ]
})
export class CoupensModule { }
