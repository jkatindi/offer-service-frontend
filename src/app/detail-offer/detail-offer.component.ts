import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "../../../services/service.offer";
import {JobOffer} from "../models/job-offer";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-offer',
  templateUrl: './detail-offer.component.html',
  styleUrls: ['./detail-offer.component.css']
})
export class DetailOfferComponent implements OnInit {
  jobOffer!:JobOffer;
  id!:string;
  constructor(private  serviceOffer: ServiceOffer,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.activeRoute.snapshot.params['id'];
    this.serviceOffer.getJobOfferById(this.id)
      .subscribe(data=>this.jobOffer=data);
  }

}
