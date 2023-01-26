import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AtoutMainComponent } from 'src/app/atout/atout-main/atout-main.component';
import { ClientMainComponent } from 'src/app/client/client-main/client-main.component';
import { ContactMainComponent } from 'src/app/contact/contact-main/contact-main.component';
import { ContactsComponent } from 'src/app/contact/contacts/contacts.component';
import { PresentationMainComponent } from 'src/app/presentation/presentation-main/presentation-main.component';

import { ServicesMainComponent } from 'src/app/services/services-main/services-main.component';
import { ShareModule } from 'src/app/share/share.module';
import { AdminModule } from '../admin.module';
import { PageAccueilComponent } from '../pages-admin/page-accueil/page-accueil.component';
import { PageAtoutComponent } from '../pages-admin/page-atout/page-atout.component';
import { PageClientComponent } from '../pages-admin/page-client/page-client.component';
import { PageContactComponent } from '../pages-admin/page-contact/page-contact.component';
import { PagePresentationComponent } from '../pages-admin/page-presentation/page-presentation.component';
import { PageServiceItemComponent } from '../pages-admin/page-service-item/page-service-item.component';
import { PagesComponent } from './pages.component';
import { PresentationAdminComponent } from './presentation-admin/presentation-admin.component';



// const routes: Routes = [

//   {
//     path:'accueil',
//     component: PageAccueilComponent,
//   }, 
//   { 
//     path:'presentations', 
//     component: PagePresentationComponent, 
//   },
//   {    
//     path:'atouts',
//     component:PageAtoutComponent,
//   },
//   {
//     path:'clients',
//     component: PageClientComponent,
//   },
//   {
//     path:'services',
//     component:PageServiceItemComponent,
//   },
//   {
//     path:'contacts',
//     component:PageContactComponent,
//   }
// ];  

// @NgModule({ 
//   imports: [ CommonModule,], 
//   exports: [RouterModule,CommonModule]
// })
export class PagesRoutingModule { }
