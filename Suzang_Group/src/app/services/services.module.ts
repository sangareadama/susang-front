import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ShareModule } from '../share/share.module';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { RippleModule } from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog'; 
import { NgToastModule } from 'ng-angular-popup';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    ServicesMainComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    PanelModule,
    MenuModule,
    MessagesModule,
    MessageModule,  
    RippleModule,    
    NgToastModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    CardModule
  ]
})
export class ServicesModule { }
