import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { StatNewsletterServiceService } from '../serviceAdmin/StatNewsletter/stat-newsletter-service.service';
import { NgDynamicBreadcrumbService } from 'ng-dynamic-breadcrumb';
@Component({
  selector: 'app-body', 
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private ngDynamicBreadcrumbService: NgDynamicBreadcrumbService,private statNewsletterServiceService:StatNewsletterServiceService) { }

  activePage!:any;

  splitted!:string[];
  
  ngOnInit(): void {

    
    const breadcrumb =  {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
    this.ngDynamicBreadcrumbService.updateBreadcrumbLabels(breadcrumb);

    
    this.getBodyClass();

   this.splitted= window.location.href.split("#",2); 
   
   this.activePage=this.splitted[1] ;
   
   
  }    

  updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'page {{pageOneID}}',
        url: '/page1/:pageOneID' 
      },
      {
        label: 'page {{pageTwoID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID'
      },
      {
        label: 'page {{pageThreeID}}',
        url: 'page1/:pageOneID/page2/:pageTwoID/page3/:pageThreeID'
      },
      {
        label: 'Update Breadcrumb',
        url: ''
      }
    ];
    this.ngDynamicBreadcrumbService.updateBreadcrumb(breadcrumbs);
  }
  
@Input() collapsed=false;
@Input() screenWidth=0;

  getBodyClass():string{

    let styleClass='';
    if(this.collapsed && this.screenWidth>768){
      styleClass='body-trimed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth>0){
      styleClass='body-md-screen'
    }

    return styleClass;

    
  }
  
  
}
