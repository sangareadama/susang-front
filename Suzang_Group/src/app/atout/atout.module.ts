import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtoutMainComponent } from './atout-main/atout-main.component';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({  
  declarations: [
    AtoutMainComponent
    
  ],   
  imports: [   
    CommonModule,
    RouterModule,
    ShareModule
  ]
})
export class AtoutModule { }
