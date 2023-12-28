import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "./services/service.offer";
import { DataStateService } from './services/data-state.service';
import { StateAppService } from './services/state-app.service';
import { Observable, catchError, map, startWith,of } from 'rxjs';
import { JobOffer } from './models/job-offer';
import { AppDataState, DataStateEnum } from './state/offer.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StateAppService]
})
export class AppComponent implements OnInit{
  title = 'jobOfferApp';
  ListJob!: Observable<AppDataState<JobOffer[]>>;

  constructor() {

  }
  ngOnInit() {

   }




}
