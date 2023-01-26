import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin/admin-main/admin-main.component';
import { CoupensComponent } from './admin/coupens/coupens.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { MediaComponent } from './admin/media/media.component';
import { PagesComponent } from './admin/pages/pages.component';
import { ProductsComponent } from './admin/products/products.component';
import { AdminGuard } from './admin/serviceAdmin/GuardService/admin.guard';
import { ManagerGuard } from './admin/serviceAdmin/GuardService/manager.guard';
import { SettingsComponent } from './admin/settings/settings.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { AtoutMainComponent } from './atout/atout-main/atout-main.component';
import { ClientMainComponent } from './client/client-main/client-main.component';
import { ClientsComponent } from './client/clients/clients.component';
import { ContactMainComponent } from './contact/contact-main/contact-main.component';
import { ForgotPasswordComponent } from './home/home-main/forgot-password/forgot-password.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { ResetPasswordComponent } from './home/reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { PresentationMainComponent } from './presentation/presentation-main/presentation-main.component';
import { ServicesMainComponent } from './services/services-main/services-main.component';

const routes: Routes = [
  {path: '',  redirectTo : '/accueil',
  pathMatch : 'full'},
  {path:"login",component:LoginComponent},
  {path:"forgot-password",component:ForgotPasswordComponent},
  {path:"resetPassword",component:ResetPasswordComponent},
  {path:"dessoucrirNews",component:ResetPasswordComponent},
  {path:'admin',
    component:AdminMainComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: ''
        }
      ]
    },
    pathMatch:'full',   
    canActivate:[AdminGuard]
  },
  {path:"dashboard",component:DashboardComponent},
  {path:"accueil",component:HomeMainComponent},
  {path:"clients",component:ClientMainComponent},
  {path:"atouts",component:AtoutMainComponent},
  {path:"contacts",component:ContactMainComponent},
  {path:"presentations",component:PresentationMainComponent},
  {path:"services",
    component:ServicesMainComponent,
    pathMatch:'full',   
    // canActivate:[ManagerGuard]
  },
  {path:"assets",component:AdminMainComponent,
  pathMatch:'full',   
  canActivate:[AdminGuard]
  },
   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 