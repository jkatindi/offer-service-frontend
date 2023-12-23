import { EventEmitter, Injectable, Output } from '@angular/core';
import { JobOffer } from '../models/job-offer';


@Injectable({
  providedIn: 'root'
})
export class StateAppService {
   dataEmiteur=new EventEmitter<JobOffer[]>();
  constructor() { }
   updateData(data: JobOffer[]){
     this.dataEmiteur.emit(data);
   }
}
