import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { ServiceOffer } from '../../../services/service.offer';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobOffer } from '../../../models/job-offer';
import { StateAppService } from '../../../services/state-app.service';
import {ActionEvent, OfferActionsTypes} from "../../../state/offer.state";


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  keyWord="";
  test!: any[];
  listJob$?: Observable<JobOffer[]> |null=null;
  @Output() offerEventEmetter=new EventEmitter<ActionEvent>();
  constructor(private service: ServiceOffer,private stateAppService: StateAppService) {
     }

  ngOnInit(): void {

  }


  find() {
    this.listJob$=this.service.research(this.keyWord);

    this.listJob$?.subscribe((data)=>{
        this.offerEventEmetter.emit({typeAction: OfferActionsTypes.SEARCH_OFFERS,payload: data})
         console.log(data)
     })
  }
}
