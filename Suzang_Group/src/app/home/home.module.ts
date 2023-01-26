import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideHomeComponent } from './slide-home/slide-home.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientMainComponent } from '../client/client-main/client-main.component';
import { AtoutMainComponent } from '../atout/atout-main/atout-main.component';
import { ContactMainComponent } from '../contact/contact-main/contact-main.component';
import { ServicesMainComponent } from '../services/services-main/services-main.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ForgotPasswordComponent } from './home-main/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgToastModule } from 'ng-angular-popup';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ 
    SlideHomeComponent,
    HomeMainComponent, 
    ForgotPasswordComponent,   
    ResetPasswordComponent
  ],
  imports: [    
    RouterModule,    
    CommonModule, 
    ShareModule,
    RouterModule, 
    ReactiveFormsModule, 
    FormsModule,
    CommonModule,
    AppRoutingModule, 
    BrowserModule,    
    HttpClientModule,
    OverlayModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,  
    ReactiveFormsModule, 
    FormsModule,
    MatToolbarModule,
    NgToastModule
  ],
  exports:[
    HomeMainComponent,
    SlideHomeComponent
  ]
})
export class HomeModule { }
