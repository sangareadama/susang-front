import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../serviceAdmin/login.service';
import { fadeInOut, INavbarData } from './helper';
import { navbarDataAdmin, navbarDataManger } from './nav-data';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean; 
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
  fadeInOut,
    trigger('rotate', [    
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ] 
  
})
export class SidenavComponent implements OnInit {

  
  constructor( public router:Router,private login: LoginService) { }

  
   
  
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = true;
  screenWidth = 0;
  navData!:any;
  multiple:boolean=false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }else{
      this.collapsed = true;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

  }

  ngOnInit(): void {
    this.onGetUtilisateurPermitin()
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  } 
  handleClick(item: INavbarData): void{
    this.shrinkItems(item);
    item.expanded=!item.expanded;
  }

  getActiveClass(data:INavbarData):String {

    return this.router.url.includes(data.routeLink)? 'active':'';
 
  }
  shrinkItems(item: INavbarData):void{
    if(!this.multiple){
      for(let modelItem of this.navData){
        if(item !==modelItem && modelItem.expanded){
          modelItem.expanded=false;
        }
    }
  }
  }


  onGetUtilisateurPermitin(){

      //     //redirect ...ADMIN dash
      if(this.login.getUserRole()=='ROLE_ADMIN'){
        // admin Dashboard
        this.navData=navbarDataAdmin;

      }else if(this.login.getUserRole()=='ROLE_MANAGER'){
        //     //redirect Manager Dash
      // window.location.href='/accueil'
         this.navData=navbarDataManger;
        
      }
  }
}

