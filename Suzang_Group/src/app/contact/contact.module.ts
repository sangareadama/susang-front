import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgToastModule } from 'ng-angular-popup';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
// import { AngularEditorModule } from '@kolkov/angular-editor';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import {CalendarModule} from 'primeng/calendar';
import { InputTextareaModule } from "primeng/inputtextarea";

@NgModule({
  declarations: [
    ContactMainComponent,
    ContactsComponent
  ], 
  imports: [
    CommonModule,  
    RouterModule,  
    ShareModule,
    ReactiveFormsModule,
    HttpClientModule, 
    OverlayModule,  
    FormsModule,
    GoogleMapsModule,
    NgToastModule,
    ButtonModule, 
    InputTextModule,
    FieldsetModule,
    BrowserAnimationsModule,
    PanelModule,
    MenuModule,
    MessagesModule,
    MessageModule,
    RippleModule,
    NgToastModule,  
    CalendarModule,
    InputTextareaModule,
    
    
  ]

})
export class ContactModule { }
