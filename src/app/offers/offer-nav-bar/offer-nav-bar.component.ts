import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, OfferActionsTypes} from "../../state/offer.state";

@Component({
  selector: 'app-offer-nav-bar',
  templateUrl: './offer-nav-bar.component.html',
  styleUrls: ['./offer-nav-bar.component.css']
})
export class OfferNavBarComponent implements OnInit {
   @Output() offerEventEmitter: EventEmitter<ActionEvent>=new  EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onGetAllOffers() {
     this.offerEventEmitter.emit({typeAction: OfferActionsTypes.GET_ALL_OFFERS,payload:null})
  }

  onGetAvailableOffers() {
    this.offerEventEmitter.emit({typeAction: OfferActionsTypes.GET_AVAILABLE_OFFERS,payload:null})
  }

  onNewOffer() {

  }



  sendEvent($event: ActionEvent) {
     this.offerEventEmitter.emit({typeAction:$event.typeAction,payload:$event.payload})
  }
}
