import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationMainComponent } from './presentation-main/presentation-main.component';
import { ShareModule } from '../share/share.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarSharedComponent } from "../share/navbar-shared/navbar-shared.component";
import { RouterModule } from '@angular/router';


 
@NgModule({
    declarations: [
        PresentationMainComponent
    ],
    imports: [
        CommonModule,
    RouterModule,
    ShareModule
    ]  
})
export class PresentationModule { }
