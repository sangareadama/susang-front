import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoleSchema } from 'src/app/model/RoleSchema';
import { Role } from '../../modelAdmin/Role';

import { Utilisateur } from '../../modelAdmin/Utilisateur';
import { RoleService } from '../../serviceAdmin/role.service';

@Component({
  selector: 'app-roles', 
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private roleService:RoleService) { }

  public roles!: Role[];  
  roleShema:RoleSchema[]=[];
  message!:string;

//primeng
  roleDialog!: boolean;
  role:Role = new Role(0,"");
  roleForm!:FormGroup;
  submitted!: boolean;

  ngOnInit(): void {
    this.initForm();
    this.getRole();
  } 

  initForm() {
    this.roleForm = new FormGroup({
      id: new FormControl(),
      libelle:new FormControl(null, Validators.required) ,
    });
  }

  public getRole(){
    this.roleService.getRoles().subscribe(
      (response:Role[])=>{
        this.roles=response;
        console.log(this.roles)

        if(response.length>0){   

          Object.keys(response[0]).forEach(key=>{

            this.roleShema.push({header:key,field:key})
            
          })

          // sans l'affichage du Id
          // Object.keys(response[0]).filter(u=>u.toLowerCase()!=='id').forEach(key=>{

          //   this.roleShema.push({header:key,field:key})
            
          // })
        }
      },  
      (error:HttpErrorResponse)=>{
          alert(error.message);
      } 
    ); 
  }


  openNew() {
    this.submitted = false;
    this.roleDialog = true;
}

hideDialog() {
  this.roleDialog = false;
  this.submitted = false;
}

saveRole() {
  this.submitted = true;  

  this.roleService.addRole(this.roleForm.value).subscribe(
    (response)=>{
      this.getRole();
      this.message="operation effectuée avec succès !"
    },
    (error)=>{  
      console.log('Une erreure à survenue: '+ error);
    }
  )


  // if (this.product.name.trim()) {
  //     if (this.product.id) {
  //         this.products[this.findIndexById(this.product.id)] = this.product;
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
  //     }
  //     else {
  //         this.product.id = this.createId();
  //         this.product.image = 'product-placeholder.svg';
  //         this.products.push(this.product);
  //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
  //     }

  //     this.products = [...this.products];
  //     this.productDialog = false;
  //     this.product = {};
  // }
}
}
