import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ServiceOffer } from '../../../services/service.offer';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobOffer } from '../../../models/job-offer';
import { StateAppService } from '../../../services/state-app.service';
import {ActionEvent, OfferActionsTypes} from "../../../state/offer.state";
import {EventDriverService} from "../../../services/event-driver.service";


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  keyWord="";
  test!: any[];
  listJob$?: Observable<JobOffer[]> |null=null;
  constructor(private service: ServiceOffer,private eventDriver: EventDriverService) {
     }

  ngOnInit(): void {

  }

  find() {
    this.listJob$=this.service.research(this.keyWord);

    this.listJob$?.subscribe((data)=>{
          this.eventDriver.publishEvent({typeAction: OfferActionsTypes.SEARCH_OFFERS,payload: data})
         console.log(data)
     })
  }
}
