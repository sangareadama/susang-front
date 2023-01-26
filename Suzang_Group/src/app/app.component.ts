import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { RoleService } from './service/role.service';
import { UtilisateurService } from './service/utilisateur.service';



interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
  
})
export class AppComponent implements OnInit, OnDestroy  {
  title(title: any) {
    throw new Error('Method not implemented.');
    
  }
  isSideNavCollapsed=false;
  screenWidth=0;
  homeimage:String="/assets/images/nav_home.png";   

  constructor(private messageService: MessageService,private roleService:RoleService,
    private utilisateurService: UtilisateurService,private primengConfig: PrimeNGConfig){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // changeEditor(event:EditorChangeContent|EditorChangeSelection){
  //   console.log('editor got chnaged', event)
  // }
  ngOnInit() {   
    this.primengConfig.ripple = true;
    
    
    // setTimeout(() => {
  
    //   this.loader=false;  
    //  }, 3000);

     
    //  this.options = {
    //   center: {lat: 5.398340, lng:-3.970894},
    //   zoom: 18 
    //   };

    //   this.overlays = [
    //     new google.maps.Marker({position: {lat: 36.879466, lng: 30.667648}, title:"Konyaalti"}),
    //     new google.maps.Marker({position: {lat: 36.883707, lng: 30.689216}, title:"Ataturk Park"}),
    //     new google.maps.Marker({position: {lat: 36.885233, lng: 30.702323}, title:"Oldtown"}),
    //     new google.maps.Polygon({paths: [
    //         {lat: 36.9177, lng: 30.7854},{lat: 36.8851, lng: 30.7802},{lat: 36.8829, lng: 30.8111},{lat: 36.9177, lng: 30.8159}
    //     ], strokeOpacity: 0.5, strokeWeight: 1,fillColor: '#1976D2', fillOpacity: 0.35
    //     }),
    //     new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
    //     new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
    // ];
  }   
  
  options: any;

  overlays!: any[];


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed

  }


  
  // htmlContent='';


  // editorConfig: AngularEditorConfig = {
  //   editable: true,
  //     spellcheck: true,
  //     height: 'auto',
  //     minHeight: '0',
  //     maxHeight: 'auto',
  //     width: 'auto',
  //     minWidth: '0',
  //     translate: 'yes',
  //     enableToolbar: true,
  //     showToolbar: true,
  //     placeholder: 'Enter text here...',
  //     defaultParagraphSeparator: '',
  //     defaultFontName: '',
  //     defaultFontSize: '',
  //     fonts: [
  //       {class: 'arial', name: 'Arial'},
  //       {class: 'times-new-roman', name: 'Times New Roman'},
  //       {class: 'calibri', name: 'Calibri'},
  //       {class: 'comic-sans-ms', name: 'Comic Sans MS'}
  //     ],
  //     customClasses: [
  //     {
  //       name: 'quote',
  //       class: 'quote',
  //     },
  //     {
  //       name: 'redText',
  //       class: 'redText'
  //     },
  //     {
  //       name: 'titleText',
  //       class: 'titleText',
  //       tag: 'h1',
  //     },
  //   ],
  //   uploadUrl: 'v1/image',
  // }


  

}
