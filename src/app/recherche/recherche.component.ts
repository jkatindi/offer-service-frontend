import { Component, OnInit } from '@angular/core';
import { ServiceOffer } from '../services/service.offer';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobOffer } from '../models/job-offer';
import { StateAppService } from '../services/state-app.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  
  keyWord="";
  test!: any[];
  listJob!: Observable<JobOffer[]>
  constructor(private service: ServiceOffer,private stateAppService: StateAppService,private router: Router) { 
   
  }
     
  ngOnInit(): void {
   
  }

  find(){
       this.listJob=this.service.research(this.keyWord);
       this.listJob.subscribe((data)=>{
        this.stateAppService.updateData(data);
        this.router.navigate(["/list-offer"]);
      });
       
    }
}
