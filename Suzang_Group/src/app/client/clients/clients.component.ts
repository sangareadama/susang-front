import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

  backgroundImg : String="../../assets/images/PAGE SITE SUZANG-BG-05.png"; 
  homeimage2:String="../../assets/images/nav_home2.png"; 
  homeimage3:String="../../assets/images/nav_home3.png";
  homeimage4:String="../../assets/images/nav_home4.png";  
  ngOnInit(): void {
  }

}
