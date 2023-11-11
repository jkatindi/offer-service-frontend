import { Component, OnInit } from '@angular/core';
import { ServiceOffer } from '../services/service.offer';
import { JobOffer, PageJobOffer } from '../models/job-offer';
import {Router} from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent  {

  keyWord =new String("");
  listJobOffers!: JobOffer[];
  jobOffers!: JobOffer[]
  size: number=2;
  totalPages: number=0;
  currentPage: number=0;
  pageJobOffer!: Observable<JobOffer[]>;

  constructor(private  router:Router,private offerService: ServiceOffer) { 
    this.pageJobOffer=this.offerService.getAllJobOffers();
  }

  ngOnInit() {
      this.hundleData();
  }
   
   hundleData(){
      this.pageJobOffer.subscribe((offerList)=>{
            this.offerService.getPageJobOffers(this.currentPage,this.size,offerList)
            .subscribe((jobOfferList)=>{
              this.listJobOffers=jobOfferList.jobOffers;
              this.totalPages=jobOfferList.totalPages;
            })
      })
  }
   detailOffer(id: String) {
    this.router.navigate(["/detail-offer",id])
  }
  
  goToPage(index: number){
    this.currentPage=index;
    this.hundleData()
  }

  find(){
    this.pageJobOffer=this.offerService.research(this.keyWord);
    this.hundleData();
    
  }

}
