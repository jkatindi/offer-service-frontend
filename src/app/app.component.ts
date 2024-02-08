import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "./services/service.offer";
import { DataStateService } from './services/data-state.service';
import { Observable, catchError, map, startWith,of } from 'rxjs';
import { JobOffer } from './models/job-offer';
import { AppDataState, DataStateEnum } from './state/offer.state';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jobOfferApp';

  constructor(private  router: Router) {
  }
  ngOnInit() : void  {
   
   }
}
