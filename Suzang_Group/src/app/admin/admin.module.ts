import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ShareModule } from '../share/share.module';
import { PagePresentationComponent } from './pages-admin/page-presentation/page-presentation.component';
import {MatSelectModule} from '@angular/material/select';
import { PageClientComponent } from './pages-admin/page-client/page-client.component';
import { PageAtoutComponent } from './pages-admin/page-atout/page-atout.component';
import { PageServiceItemComponent } from './pages-admin/page-service-item/page-service-item.component';
import {MatButtonModule} from '@angular/material/button';
import { PageAccueilComponent } from './pages-admin/page-accueil/page-accueil.component';
import { PageContactComponent } from './pages-admin/page-contact/page-contact.component';
import { AdminGuard } from './serviceAdmin/GuardService/admin.guard';
import {MatGridListModule} from '@angular/material/grid-list';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {RippleModule} from 'primeng/ripple';
import { NgToastModule } from 'ng-angular-popup';
import { PagesModule } from './pages/pages.module';
import {CalendarModule} from 'primeng/calendar';
import {EditorModule} from 'primeng/editor';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";

const adminRouter = [
  {path: 'admin', component: AdminMainComponent, 
    canActivate:[AdminGuard],
    children:[
      {path: 'dashboard', component: DashboardComponent
    },
      {path: 'statistics', component: StatisticsComponent},
      {path: 'utilisateur',
       data: {
        title: 'Utilisateur',
        breadcrumb: [
          {
            label: 'Utilisateur',
            url: ''
          }
        ]
      },
        loadChildren: () => import('./utilisateur/utilisateur-routing.module').then(m => m.UtilisateurRoutingModule)
      },
      {
        path: 'dataListe',  
        data: {
          title: 'dataListe',
          breadcrumb: [
            {  
              label: 'DataListe',
              url: ''
            }
          ]
        },   
        loadChildren: () => import('./newsletters/newsletters.module').then(m => m.NewslettersModule)
      }, 
      {
        path: 'products',    
        loadChildren: () => import('./products/products-routing.module').then(m => m.ProductsRoutingModule)
      }, 
      {
        path: 'coupens',    
        loadChildren: () => import('./coupens/coupens-routing.module').then(m => m.CoupensRoutingModule)
      },  
      {path: 'media',  
        loadChildren: () => import('./pages-admin/pages-admin.module').then(m => m.PagesAdminModule)
      },
      {path: 'pages',
      loadChildren: () => import('./pages-admin/pages-admin.module').then(m => m.PagesAdminModule)
      },
      {path: 'settings', component: SettingsComponent}

    ]},  
]

@NgModule({
  declarations: [
    
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
  
    StatisticsComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    SublevelMenuComponent,
    HeaderComponent,
    UtilisateurComponent, 
    AdminMainComponent,
    
    
 
    
  ],
  imports: [  
    CommonModule,
    AppRoutingModule, 
    BrowserModule, 
    HttpClientModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
    CdkMenuModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    TextFieldModule,
    // ShareModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
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
    NgDynamicBreadcrumbModule,
    CalendarModule,
    EditorModule,
     
    
    
  //  RouterModule.forChild(adminRouter),
    RouterModule.forRoot(adminRouter, {scrollPositionRestoration: 'enabled'}),
  ],  
  exports:[
    SidenavComponent,
    BodyComponent,
    HeaderComponent,

     
  ], 
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA  
  ]
})
export class AdminModule { }
 