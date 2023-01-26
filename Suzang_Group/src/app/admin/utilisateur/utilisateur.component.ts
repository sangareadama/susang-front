import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { map } from 'rxjs';
import { FileHandle } from '../modelAdmin/FileHandle';
import { Role } from '../modelAdmin/Role';
import {Utilisateur } from '../modelAdmin/Utilisateur';
import { UtilisateurRole } from '../modelAdmin/UtilisateurRole';
import { UtilisateurImageDatailService } from '../serviceAdmin/ImageService/utilisateur-image-datail.service';

import { RoleService } from '../serviceAdmin/role.service';
import { UtilisateurService } from '../serviceAdmin/utilisateur.service';


@Component({ 
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})

export class UtilisateurComponent implements OnInit {


  
  public roles!: Role[]; 
  public utilisateurs!: Utilisateur[];

  utilisateurForm!:FormGroup;
  message!:string;
  utilisateur:Utilisateur= new Utilisateur(0,"","","","",[],[]); 
  utilisateurRole:UtilisateurRole=new UtilisateurRole("","");
  utilisateurRoleForm!:FormGroup;


  // utilisateurData={
  //   nom:'',
  //   prenom:'',
  //   username:'', 
  //   password:'' 
  // };

  
  

  
  constructor( private roleService:RoleService,private utilisateurService: UtilisateurService,
    private formBuilder:FormBuilder,private sanitazer:DomSanitizer,
    private utilisateurImageDatailService:UtilisateurImageDatailService, private toast: NgToastService,private router:Router,) { }

  ngOnInit(): void {
    this.getRole();
    this.getUtilisateur(); 
    this.initForm();
    this.initFormUR()
  } 
 
  public getRole(){
    this.roleService.getRoles().subscribe(
      (response:Role[])=>{
        this.roles=response;
        console.log(this.roles)
      },
      (error:HttpErrorResponse)=>{
          alert(error.message);
      } 
    ); 
  }
 
  public getUtilisateur(){ 
    this.utilisateurService.getUtilisateurs()
    .pipe(
      map((x:Utilisateur[],i)=>x.map((utilisateur:Utilisateur)=>this.utilisateurImageDatailService.createImage(utilisateur)))
    )
    
    .subscribe(
      
      (response:Utilisateur[])=>{
        this.utilisateurs=response;
        console.log(this.utilisateurs)
        
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  }

  initForm() {
    this.utilisateurForm = new FormGroup({

      id: new FormControl(),
      nom:new FormControl(null, Validators.required) ,
      prenom:new FormControl(null, Validators.required) ,
      username:new FormControl(null, Validators.required) ,
      password:new FormControl(null, Validators.required) ,     
 
    });
  }


  initFormUR() {
    this.utilisateurRoleForm = new FormGroup({
      username:new FormControl(null, Validators.required) ,
      libelle:new FormControl(null, Validators.required) ,     
 
    });
  }

  saveOrUpdateUtilisateur(){

    const utilisateurFormData= this.prepareFormData(this.utilisateur);

    this.utilisateurService.addUtilisateur(utilisateurFormData).subscribe(
      (response)=>{
        this.getUtilisateur();
        this.utilisateur.utilisateurImage=[];
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);
        this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    )
  }

  onLoadUtilisateur(UtilisateurLorded:any){

    console.log("voici "+ UtilisateurLorded);

    this.utilisateurForm.patchValue({
      id: UtilisateurLorded.id
    });

    this.utilisateur.nom = UtilisateurLorded.nom;
    this.utilisateur.prenom = UtilisateurLorded.prenom;
    this.utilisateur.username= UtilisateurLorded.username; 
    this.utilisateur.password= UtilisateurLorded.password; 
  }


  deleteUtilisateur(utilisateur:Utilisateur){
    this.utilisateurService.deleteUtilisateur(utilisateur).subscribe(
      (response)=>{  
        console.warn(response); 
        this.getUtilisateur();
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        
      },
      (error)=>{ 
        this.toast.error({detail:"Error Message",summary:'summary:Une erreure à survenue: '+ error,duration:2000})
      }
    )
        
  }

  // initialisation() {

  //   this.utilisateurRole = new UtilisateurRole("","") ;
  //   this.message = "" ;
  //   this.utilisateurRoleForm.patchValue(
  //     {
  //       id : null
  //     }
  //   )

  // }

  onLoadUtilisateurRole(utilisateurRoleLorded:any){
    
    
    this.utilisateurRoleForm.patchValue({
      id: utilisateurRoleLorded.id
    });

    this.utilisateurRole.username = utilisateurRoleLorded.username;
    this.utilisateurRole.libelle = utilisateurRoleLorded.libelle;

  }
   
  onSaveUtilisateurRole(){
    this.utilisateurService.saveUtilisateurRole(this.utilisateurRole).subscribe(
      (response)=>{
        this.getUtilisateur;
        this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        
      }, 
      (error)=>{ 
        this.toast.error({detail:"Error Message",summary:'summary:Une erreure à survenue: '+ error,duration:2000})
      }
    )

  }

  removeImage(i:number){
    this.utilisateur.utilisateurImage.splice(i,1)
  }


  // public saveUtilisateur(){

  //   this.utilisateurService.addUtilisateur(this.utilisateurData).subscribe((data:any)=>{
  //     console.log('sucess');
  //     console.log(data);
   
  //     //login 
  //   }, 
  //    (error:HttpErrorResponse)=>{  
  //       console.log("Error !");
  //       console.log(error)
  //    })

  // }



  // public onOpenModal(utilisateur:any , mode:string):void {
  //   const container= document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type='button';
  //   button.style.display='none';
  //   button.setAttribute('data-toggle','modal');
  //   if(mode==='add'){
  //     button.setAttribute('data-target','#addEmployeeModal');
  //   }
  //   if(mode==='edit'){  
  //     button.setAttribute('data-target','#updateEmployeeModal');
  //   }
  //   if(mode==='delete'){
  //     button.setAttribute('data-target','#deleteEmployeeModal');
  //   }

  //   container?.appendChild(button);
  //   button.click();
  // }

  prepareFormData(utilisateur :Utilisateur):FormData{
    const formData= new FormData();
    formData.append(
      'utilisateur',
      new Blob([JSON.stringify(utilisateur)],{type: 'application/json'})
    );
    for(var i=0;i<utilisateur.utilisateurImage.length;i++){
      formData.append(
        'imageFile',
        utilisateur.utilisateurImage[i].file,
        utilisateur.utilisateurImage[i].file.name,

      );  
    }
    return formData;
  }


  onFileSelected(event:any){
    if(event.target.files){
    const fileTarget=  event.target.files[0];

    const fileHandle:FileHandle={
      file:fileTarget,
      url:this.sanitazer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(fileTarget)
      )
      
    }
    this.utilisateur.utilisateurImage.push(fileHandle); 
    }

  }
 
}



