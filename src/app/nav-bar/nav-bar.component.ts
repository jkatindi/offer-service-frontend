import { Component, OnInit } from '@angular/core';
import { DataStateService } from '../services/data-state.service';
import { ServiceOffer } from '../services/service.offer';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  actions: Array<any>=[
    {title: "Home",route: "/home-offer",icon: "house text-success",theFunction:""},
    {title: "Avaible Job offer",route: "/list-offer",icon: "arrow-down-up text-success",theFunction: "initState()"},
    {title: "new Job Offer",route: "/new-offer",icon: "safe",theFunction:""}
   ];
  constructor() { }

  ngOnInit(): void {
  }

 
}
