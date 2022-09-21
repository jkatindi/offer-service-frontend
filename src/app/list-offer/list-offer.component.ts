import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "../../../services/service.offer";
import {JobOffer} from "../models/job-offer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {
  offers!: JobOffer[] ;
  constructor(private serviceOffer: ServiceOffer,private  router:Router) { }

  ngOnInit(): void {
     this.serviceOffer.getAllJobOffers()
       .subscribe(data=>this.offers=data);
  }

  detailOffer(id: string) {
    this.router.navigate(["detail-offer/",id]);
  }
}
