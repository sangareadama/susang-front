import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { RoleService } from './service/role.service';
import { ShareModule } from './share/share.module';
import { ClientModule } from './client/client.module';
import { PresentationModule } from './presentation/presentation.module';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './admin/serviceAdmin/auth_interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common'; 
import {MatGridListModule} from '@angular/material/grid-list';
import { GoogleMapsModule } from '@angular/google-maps';
import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { NgToastModule } from 'ng-angular-popup';
import {GMapModule} from 'primeng/gmap';
import {CalendarModule} from 'primeng/calendar';
import { ConfirmationService } from 'primeng/api';

import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  SPINNER,
  POSITION,
  PB_DIRECTION,
  NgxUiLoaderRouterModule,
  NgxUiLoaderHttpModule,
} from 'ngx-ui-loader';  
import{BreadcrumbModule} from 'angular-crumbs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AtoutModule } from './atout/atout.module';
import { ContactModule } from './contact/contact.module';
import { ServicesModule } from './services/services.module';
// import {ButtonModule} from 'primeng/button';
// import {TableModule} from 'primeng/table'; 
// import {ToastModule} from 'primeng/toast';
// import {DialogModule} from 'primeng/dialog';
// import {InputTextModule} from 'primeng/inputtext';

// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';

// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';

const routes: Routes = [
 
  // { 
  //   path:"coupens",children:[
  //     {
  //       path: 'create',component: ProductsComponent
  //     },
  //     {
  //       path: 'liste',component: ProductsComponent
  //     }
  //   ]
  // }

];
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,  
  ], 
  exports: [
    FormsModule,
    ReactiveFormsModule,
   
  ],  
  imports: [ 
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,  
    ShareModule,
    ClientModule, 
    AtoutModule, 
    ContactModule,
    ServicesModule,
    HomeModule,
    PresentationModule,
    AdminModule, 
    BrowserAnimationsModule,  
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,  
    ReactiveFormsModule, 
    FormsModule,  
    MatToolbarModule,
    FormsModule,  
    ReactiveFormsModule,
    CommonModule, 
    MatGridListModule, 
    GoogleMapsModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    NgToastModule,
    GMapModule,
    CalendarModule,
   
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    }),
    NgxUiLoaderModule,
    FontAwesomeModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [ConfirmationService,{provide:LocationStrategy,useClass:HashLocationStrategy},{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { } 
