import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})


export class AdminMainComponent implements OnInit {

  isSideNavCollapsed=false;
  screenWidth=0;
  homeimage:String="/assets/images/nav_home.png"; 

  constructor() { }

  ngOnInit(): void {
  }


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed

  }

}
