import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularEditorModule } from '@kolkov/angular-editor';
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

import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { NosContactsComponent } from './nos-contacts/nos-contacts.component';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";


const routes: Routes = [
  
  {
    path:'newsletter',
    component: NewsletterComponent,
    data: {
      title: 'newsletters',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: '/admin' 
        },
        {
          label: 'Data Liste/Newsletters',
          url: ''
        }
      ]
    },
  },   
  {   
    path:'nosContact', 
    component: NosContactsComponent, 
    data: {
      title: 'nosContact',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: '/admin'
        },
        {
          label: 'Data Liste/Nos Contact',
          url: ''
        }
      ]
    },
  },
 
];  


@NgModule({
  declarations: [
    NewsletterComponent,
    NosContactsComponent
  ],
  imports: [ 
    CommonModule,
    ButtonModule, 
    InputTextModule,

    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
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
    NgDynamicBreadcrumbModule,
    RouterModule.forChild(routes)], 
  exports: [RouterModule,CommonModule]
})
export class NewslettersModule { }
