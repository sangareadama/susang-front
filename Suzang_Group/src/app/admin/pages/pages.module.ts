import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { ShareModule } from 'src/app/share/share.module';
import { NavbarSharedComponent } from 'src/app/share/navbar-shared/navbar-shared.component';
import { AdminModule } from '../admin.module';
import { NavbarAdminSharedComponent } from 'src/app/admin/pages/navbar-admin-shared/navbar-admin-shared.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PresentationAdminComponent } from './presentation-admin/presentation-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    
    
    
  ],
  imports: [ 
    CommonModule,
 
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    ShareModule,
    FormsModule,
    CommonModule,  
    ShareModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserModule

  ]  
})
export class PagesModule { }
