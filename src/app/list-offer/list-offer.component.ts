import {AfterContentInit, AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ServiceOffer} from "../services/service.offer";
import {Router} from "@angular/router";
import {JobOffer} from "../models/job-offer";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DialogDetailComponent} from "../dialog-detail/dialog-detail.component";
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent {
  listJobOffers!: JobOffer[];
  currentPage: number=0;
  size: number=2;
  totalPages: number=0;
  constructor(private  router:Router,private serviceOffer:ServiceOffer,public dialog: MatDialog) {
  }
  ngOnInit() :void {
    this.handleGetPageOffers();
  }

  handleGetPageOffers(){
    this.serviceOffer.getPageJobOffers(this.currentPage,this.size)
    .subscribe((data=>{
                this.listJobOffers=data.jobOffers;
                this.totalPages=data.totalPages;
      }));
  }


  detailOffer(id: String) {
    this.router.navigate(["/detail-offer",id])
  }
  goToPage(index: number){
    this.currentPage=index;
    this.handleGetPageOffers();
  }
}
