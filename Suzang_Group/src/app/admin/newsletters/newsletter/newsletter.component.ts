import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from '../../modelAdmin/Contact';
import { Newsletter } from '../../modelAdmin/Newsletter';
import { NewsletterSchema } from '../../modelAdmin/NewsletterSchema';
import { Role } from '../../modelAdmin/Role';
import { LoginService } from '../../serviceAdmin/login.service';
import { NewsletterServiceService } from '../../serviceAdmin/Newsletter/newsletter-service.service';
import { navbarDataAdmin, navbarDataManger } from '../../sidenav/nav-data';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"

import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',  
  styleUrls: ['./newsletter.component.css']  
})
export class NewsletterComponent implements OnInit {

  constructor(public router:Router,public login: LoginService,private toast: NgToastService,private newsletterServiceService:NewsletterServiceService) { }
  
  newsletters:any;  
  newsletter!:Newsletter;
  newsletterSchema:NewsletterSchema[]=[];

  cols!: any[];
  exportColumns!: any[];

  ngOnInit(): void {
    this.onGetNewsletters();
    
    this.cols = [
      { title: 'Nom', dataKey: 'nom' },
      { title: 'Email', dataKey: 'email' },
      { title: 'Status', dataKey: 'valid' },
      { title: 'Date De Creation', dataKey: 'dateCreation' }
    ]
    this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
 
    console.log("àooo "+this.exportColumns); 
  }

  //  exportExcel() {
    
  //   import("xlsx").then(xlsx => {
  //     const worksheet = xlsx.utils.json_to_sheet(this.newsletters);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  //     const excelBuffer: any = xlsx.write(workbook, {
  //       bookType: "xlsx",
  //       type: "array"
  //     });  
  //     this.saveAsExcelFile(excelBuffer, "newsletters");
  //   });
  // }
  
  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   import("file-saver").then(FileSaver => {
  //     let EXCEL_TYPE =
  //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //     let EXCEL_EXTENSION = ".xlsx";
  //     const data: Blob = new Blob([buffer], {
  //       type: EXCEL_TYPE
  //     });
  //     FileSaver.saveAs(     
  //       data,
  //       fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
  //     );
  //   });
  // }



  // exportExcel() {
  //   alert('okkk')
  //   import("xlsx").then(xlsx => {
  //       const worksheet = xlsx.utils.json_to_sheet(this.newsletters); // Sale Data
  //       const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  //       const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
  //       this.saveAsExcelFile(excelBuffer, "newsletters");
  //   });  
  // }
  // saveAsExcelFile(buffer: any, fileName: string): void {
  //   import("file-saver").then(FileSaver => {
  //     let EXCEL_TYPE =
  //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //     let EXCEL_EXTENSION = ".xlsx";
  //     const data: Blob = new Blob([buffer], {
  //       type: EXCEL_TYPE 
  //     });
  //     FileSaver.saveAs(  
  //       data,
  //       fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
  //     );
  //   });
  // }

  

  public onGetNewsletters(){
    this.newsletterServiceService.getNewsletters().subscribe(
      (response:Contact[])=>{
        this.newsletters=response;
        console.log(this.newsletters)
        // if(response.length>0){   

        //   Object.keys(response[0]).forEach(key=>{

        //     this.newsletterSchema.push({header:key,field:key})
            
        //   })

        //   // sans l'affichage du Id
        //   Object.keys(response[0]).filter(u=>u.toLowerCase()!=='id').forEach(key=>{

        //     this.roleShema.push({header:key,field:key})
            
        //   })
        // }  
      }, 
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 

  exportPdf() {

    const doc = new jsPDF('p','pt');
          
    autoTable(doc, {
      columns: this.cols,
      body: this.newsletters,
      didDrawPage: (dataArg) => { 
       doc.text('Liste des newsletters', dataArg.settings.margin.left, 15);
      }
    });   
    doc.save('Newsletters.pdf');
    
    
  }


  

exportExcel(){

  import("xlsx").then(xlsx => {
    const worksheet = xlsx.utils.json_to_sheet(this.newsletters);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, "Newsletters");
  });

}

saveAsExcelFile(buffer: any, fileName: string): void {
  let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  let EXCEL_EXTENSION = '.xlsx';
  const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}

  public onDeleteNewsletters(newsletter:any){
    this.newsletterServiceService.deleteNewsletter(newsletter).subscribe(
        (response)=>{
          this.onGetNewsletters();
          this.toast.success({detail:"Success Message",summary:"operation effectuée avec succès !",duration:2000})
        },
        (error)=>{ 
          console.log('Une erreure à survenue: '+ error);
          this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
        }
    );
  }

  

}
