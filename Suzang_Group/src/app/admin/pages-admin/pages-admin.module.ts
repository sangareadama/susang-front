import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { PagePresentationComponent } from './page-presentation/page-presentation.component';
import { PageAtoutComponent } from './page-atout/page-atout.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageClientComponent } from './page-client/page-client.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageServiceItemComponent } from './page-service-item/page-service-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {EditorModule} from 'primeng/editor';
import {InputNumberModule} from 'primeng/inputnumber';

const routes: Routes = [

  {
    path:'accueil',
    component: PageAccueilComponent,
  }, 
  { 
    path:'presentations', 
    component: PagePresentationComponent, 
  },
  {    
    path:'atouts',
    component:PageAtoutComponent,
  },
  {  
    path:'clients',
    component: PageClientComponent,
  }, 
  {
    path:'services',
    component:PageServiceItemComponent,
  },
  {
    path:'contacts',
    component:PageContactComponent,
  },
   
 
];  



@NgModule({
  declarations: [  
    PagePresentationComponent,
    PageClientComponent,  
    PageAtoutComponent,
    PageServiceItemComponent,
    PageAccueilComponent,
    PageContactComponent,
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
    MatSelectModule,
    MatButtonModule,     
    MatGridListModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    ButtonModule, 
    InputTextModule, 
    EditorModule,
    InputNumberModule,
    RouterModule.forChild(routes)], 
  exports: [RouterModule,CommonModule]
})
export class PagesAdminModule { }
