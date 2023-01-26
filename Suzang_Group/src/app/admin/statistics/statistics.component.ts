import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { NewsletterServiceService } from 'src/app/service/newsletterService/newsletter-service.service';
import { Utilisateur } from '../modelAdmin/Utilisateur';
import { ContactServiceService } from '../serviceAdmin/pageContact/contact-service.service';
import { UtilisateurService } from '../serviceAdmin/utilisateur.service';
import { StatNewsletterServiceService } from '../serviceAdmin/StatNewsletter/stat-newsletter-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgToastService } from 'ng-angular-popup';

Chart.register(...registerables)
  
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html', 
  styleUrls: ['./statistics.component.css'],
  providers: [DatePipe]
})
export class StatisticsComponent implements OnInit {
  statsNesletter:any;
  munites:any[]=[];
  heures:any[]=[];
  jours:any[]=[];
  mois:any[]=[];
  annees:any[]=[];
  fullDate:any[]=[];
  quantiteNewsletter:any[]=[];

  myChart:any;
  date9!: Date;
  date10!: Date;
  dateFin!: Date;
  dateDeb!: Date;
  dateMonthForm!:FormGroup;
  date!:any;
  dateF!:any;


  utilisateurs!:any;
  newsletters!:any; 
  nousContacts!:any;
  constructor(private toast: NgToastService,private datePipe: DatePipe,private newsletterServiceService:NewsletterServiceService,private utilisateurService: UtilisateurService,
    private contactServiceService :ContactServiceService,private statNewsletterServiceService:StatNewsletterServiceService) {
    
    }

  ngOnInit(): void {
    // this.renderChart('bar','barChart');
    // this.renderChart('line','lineChart');
    this.getNewsletter();
    this.getUtilisateur();  
    this.onGetNousContacter();
    this.onGetStat();
   
    
  }

  initState(){
  this.munites=[];
  this.heures=[];
  this.jours=[];
  this.mois=[];
  this.annees=[];
  this.quantiteNewsletter=[];
  this.fullDate=[];
  }

  // initForm() {  
  //   this.dateMonthForm = new FormGroup({
      
  //     dateMonth:new FormControl(null, Validators.required),

  //   }) 
  // };  

  public onGetDateMonth(a:any){

    console.log(a)
    this.date = this.datePipe.transform(a, 'MMMM yyyy');

    console.log(this.date)

    this.statNewsletterServiceService.getStatNewsletterParMois(this.date).subscribe(
      (response)=>{ 
       
        this.statsNesletter=response;
        console.log(response)
        this.onChargerCarteInfo(this.statsNesletter);        
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);

         this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }  

  onChargerCarteInfo(statsNesletter:any){

    if(statsNesletter!=null){
      this.initState();

       // Object.keys(this.statsNesletter).forEach(key=>{
          //   this.munites.push(this.statsNesletter[key].minute);
          //   this.heures.push(this.statsNesletter[key].heure);
          //   this.jours.push(this.statsNesletter[key].jour);
          //   this.mois.push(this.statsNesletter[key].mois);
          //   this.quantiteNewsletter.push(this.statsNesletter[key].quantite);
            
            
          // })
      for(let i=0;i<this.statsNesletter.length;i++){
        this.munites.push(this.statsNesletter[i].minute);
        this.heures.push(this.statsNesletter[i].heure);
        this.jours.push(this.statsNesletter[i].jour);
        this.mois.push(this.statsNesletter[i].mois);
        this.annees.push(this.statsNesletter[i].annee);
        this.quantiteNewsletter.push(this.statsNesletter[i].quantite);
        this.fullDate.push( this.datePipe.transform(this.statsNesletter[i].date, 'dd MMMM yyyy HH:mm'));
        
      }
      this.creerChart(this.fullDate,this.quantiteNewsletter);
    }
  }

  public onGetDateIntervalDeb(a:any){

    console.log(a)
    this.dateF = this.datePipe.transform(a, 'dd MMMM yyyy HH:mm:ss');
    console.log(this.dateF)
  }

  public onGetDateIntervalFin(a:any){

    console.log(a)
    this.date = this.datePipe.transform(a, 'dd MMMM yyyy HH:mm:ss');
    console.log(this.date) 
    console.log(this.dateF)   
 

    this.statNewsletterServiceService.getStatNewsletterParInterval(this.dateF,this.date).subscribe(
      (response:any)=>{ 
       
         this.statsNesletter=response;
        console.log(response)        
        this.onChargerCarteInfo(this.statsNesletter); 
      },
      (error:any)=>{ 
        console.log('Une erreure à survenue: '+ error);

         this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }   
  
  public onGetDateYear(a:any){
    console.log(a)
    this.date = this.datePipe.transform(a, 'yyyy');

    this.statNewsletterServiceService.getStatNewsletterParAn(this.date).subscribe(
      (response)=>{ 
       
        this.statsNesletter=response;
        console.log(response) 
        this.onChargerCarteInfo(this.statsNesletter); 
      },
      (error)=>{ 
        console.log('Une erreure à survenue: '+ error);

         this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: '+ error,duration:2000})
      }
    ) 
  }  
  
  public getUtilisateur(){ 
    this.utilisateurService.getUtilisateurs().subscribe(
      (response:any)=>{
        this.utilisateurs=response;
        console.log(this.utilisateurs)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }

    )
  }
  
  public getNewsletter(){ 
    this.newsletterServiceService.getNewsletters().subscribe(
      (response:any)=>{
        this.newsletters=response;
        console.log(this.newsletters)
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);  
      }

    )
  }

  creerChart(labalData:any,mainData:any){

    if(this.myChart!=null){
      this.myChart.destroy();
    }
      
      this.myChart = new Chart("lineChart",{

        type: 'line', 
        data: {
            labels: labalData,
            datasets: [{
                label: 'Nombre de Personne',
                borderColor:"#f9b442",
                backgroundColor: "#FFF",
                
                data:mainData , 
               
                borderWidth: 2
            }]
        },  
        options: {
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
          scales: {
            y: { // defining min and max so hiding the dataset does not change scale range
              min: 0,
              max: 35
            }
          }
        }
      });

  }  



  public onGetNousContacter(){
    this.contactServiceService.getNosContacts().subscribe(
      (response:any)=>{
        this.nousContacts=response;
        console.log(this.nousContacts) 
      },
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  } 


  public onGetStat(){
    this.statNewsletterServiceService.getStatNewsletters().subscribe(
      (response:any)=>{
        this.statsNesletter=response;
        console.log(this.statsNesletter)
        this.onChargerCarteInfo(this.statsNesletter); 
        
      }, 
      (error:HttpErrorResponse)=>{
          // alert(error.message);
      }
    );
  }
}
