import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { NavbarSharedComponent } from './navbar-shared/navbar-shared.component';
import { FooterSharedComponent } from './footer-shared/footer-shared.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavbarAdminSharedComponent } from '../admin/pages/navbar-admin-shared/navbar-admin-shared.component';
import { FooterAccueilComponent } from './footer-accueil/footer-accueil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
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
import { NgToastModule } from 'ng-angular-popup';
import {CalendarModule} from 'primeng/calendar';
import { CdkMenuModule } from '@angular/cdk/menu';



@NgModule({
  declarations: [
    NavbarHomeComponent, 
    NavbarSharedComponent,
    FooterSharedComponent,
    NavbarAdminSharedComponent,
    FooterAccueilComponent,
  
  ],
  imports: [ 
    CommonModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
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
    CdkMenuModule,
    

    
  ],  
  exports:[
    NavbarHomeComponent,
    NavbarSharedComponent,
    FooterSharedComponent,
    FooterAccueilComponent,
    NavbarAdminSharedComponent,
       
  ]  
})
export class ShareModule { }
