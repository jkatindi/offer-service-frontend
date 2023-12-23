import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "./services/service.offer";
import { DataStateService } from './services/data-state.service';
import { StateAppService } from './services/state-app.service';
import { Observable } from 'rxjs';
import { JobOffer } from './models/job-offer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateAppService]
})
export class AppComponent implements OnInit{
  title = 'jobOfferApp';
  ListJob!: Observable<JobOffer[]>;
  
  constructor(private stateApp: StateAppService,private service: ServiceOffer) {
     this.ListJob=this.service.getAllJobOffers();
  }
  ngOnInit() {
     this.ListJob.subscribe(data=>this.stateApp.updateData(data)) 
   
   }
  
   

  
}
