import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles.component';
import { UtilisateurComponent } from './utilisateur.component';

const routes: Routes = [
  {
    path:"roles",
    component: RolesComponent,
    
  },
  {  
    path:"liste", 
    component: UtilisateurComponent,
    data: {
      title: 'Liste',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: '/admin'
        },
        {
          label: 'Utilisateur/Liste',
          url: ''
        }
      ]
    },
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
