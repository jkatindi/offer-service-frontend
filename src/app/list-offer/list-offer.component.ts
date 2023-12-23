

import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ServiceOffer} from "../services/service.offer";
import {Router} from "@angular/router";
import {JobOffer, PageJobOffer} from "../models/job-offer";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogDetailComponent} from "../dialog-detail/dialog-detail.component";
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { StateAppService } from '../services/state-app.service';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {
  listJob!: JobOffer[]
  totalPages!: number ;

  currentPage: number=0;
  size: number=2;
  listJobOffer!: JobOffer[];
  
  constructor(private  router:Router,private serviceOffer:ServiceOffer,
    public dialog: MatDialog,public stateApp: StateAppService) {
      
    }
  ngOnInit() {
     this.stateApp.dataEmiteur.subscribe((data)=>{
         this.listJob=data;
         this.handleGetPageOffers();
     })
    
    }

  handleGetPageOffers(){
     this.serviceOffer.getPageJobOffers(this.currentPage,this.size,this.listJob)
     .subscribe((resp)=>{
        this.listJobOffer=resp.jobOffers;
        this.totalPages=resp.totalPages;
     })
  }


  detailOffer(id: String) {
    this.router.navigate(["/detail-offer",id])
  }
  goToPage(index: number){
     this.currentPage=index;
     this.handleGetPageOffers();
    
  }
}