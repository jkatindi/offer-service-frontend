import {Component, OnInit} from '@angular/core';
import {JobOffer, PageJobOffer} from "../models/job-offer";
import {Observable} from "rxjs/internal/Observable";
import {Router} from "@angular/router";
import {ServiceOffer} from "../services/service.offer";
import {MatDialog} from "@angular/material/dialog";
import {catchError, map, of, startWith} from "rxjs";
import {AppDataState, DataStateEnum, OfferActionsTypes} from "../state/offer.state"
import {EventDriverService} from "../services/event-driver.service";
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  totalPages!: number ;

  currentPage: number=0;
  size: number=2;
  offers!: JobOffer[];
  listJobOffer$!:Observable<JobOffer[]> ;
  listJob$!: Observable<AppDataState<PageJobOffer>>;
  readonly DataStateEnum=DataStateEnum;
  test!: string;
  erroAddOffer?:string;

  constructor(private  router:Router,private serviceOffer:ServiceOffer,
              public dialog: MatDialog,private eventDriver: EventDriverService,
              protected authServ:AuthentificationService) {
  }
  ngOnInit() {
    if(!this.authServ.isAuthenticated){
      this.router.navigateByUrl("/login")
    }
    this.eventDriver.sourceSubjectObservable.subscribe(actionEvent=>{
      switch (actionEvent.typeAction) {
        case OfferActionsTypes.GET_ALL_OFFERS: this.getAllOffers(); break;
        case OfferActionsTypes.GET_AVAILABLE_OFFERS: this.getAvailableOffers(); break;
        case OfferActionsTypes.SEARCH_OFFERS: this.research(actionEvent.payload); break;
        case OfferActionsTypes.NEW_OFFER: this.addNewJobOffer(actionEvent.payload); break;
      }
    })
  }

  handleGetPageOffers(){
    this.listJob$=this.serviceOffer.getPageJobOffers(this.currentPage,this.size,this.offers)
      .pipe(
        map((data)=>({dataState: DataStateEnum.LOADED,data: data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err=>of({dataState: DataStateEnum.ERROR,errorMessage: err.message}))
      )
  }

  getAvailableOffers(){
    this.listJobOffer$=this.serviceOffer.getAllJobOffers();
    this.listJobOffer$.subscribe(data=>{
      this.offers=data.filter(offer=>offer.availablePlace>0)
      this.handleGetPageOffers()
    })
  }


  getAllOffers(){
    this.listJobOffer$=this.serviceOffer.getAllJobOffers();
    this.listJobOffer$.subscribe(data=>{this.offers=data
      this.handleGetPageOffers()
    })
  }


  detailOffer(id: String) {
    this.router.navigate(["/detail-offer",id])
  }
  goToPage(index: number){
    this.currentPage=index;
    this.handleGetPageOffers();
  }
  research(payload: JobOffer[]){
    this.offers=payload;
    this.handleGetPageOffers();
  }

  addNewJobOffer(jobOffer: any){
    alert(JSON.stringify(jobOffer))
  }

}
