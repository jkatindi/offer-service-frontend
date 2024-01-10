import { Injectable } from '@angular/core';
import { ServiceOffer } from './service.offer';


@Injectable({
  providedIn: 'root'
})
export class DataStateService {
  public offerState: any={
     listJobOffer :[],
     pageData: [],
     currentPage:0,
     size:2,
     totalPages:0,
     status: " ",
     keyWord: ""
  }
  constructor() {

  }
  public setOfferState(state: any): void {
    this.offerState={...this.offerState, ...state}
  }
}
