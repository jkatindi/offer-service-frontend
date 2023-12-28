import {Component, OnInit} from '@angular/core';
import {ServiceOffer} from "../../services/service.offer";
import {Router} from "@angular/router";
import {JobOffer, PageJobOffer} from "../../models/job-offer";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from 'rxjs/internal/Observable';
import {catchError, map, startWith,of} from 'rxjs';
import {StateAppService} from '../../services/state-app.service';
import {AppDataState, DataStateEnum} from '../../state/offer.state';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  totalPages!: number ;

  currentPage: number=0;
  size: number=2;
  offers!: JobOffer[];
  listJobOffer$:Observable<JobOffer[]> |null=null;
  listJob$: Observable<AppDataState<PageJobOffer>> |null=null;
  readonly DataStateEnum=DataStateEnum;

  constructor(private  router:Router,private serviceOffer:ServiceOffer,
    public dialog: MatDialog,public stateApp: StateAppService) {
      this.listJobOffer$=this.serviceOffer.getAllJobOffers();
    }
  ngOnInit() {
    this.listJobOffer$?.subscribe((data)=>{
      this.offers=data;
      this.handleGetPageOffers();
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

  detailOffer(id: String) {
    this.router.navigate(["/detail-offer",id])
  }
  goToPage(index: number){
     this.currentPage=index;
     this.handleGetPageOffers();

  }
}
