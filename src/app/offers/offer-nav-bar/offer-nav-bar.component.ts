import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, OfferActionsTypes} from "../../state/offer.state";
import {EventDriverService} from "../../services/event-driver.service";

@Component({
  selector: 'app-offer-nav-bar',
  templateUrl: './offer-nav-bar.component.html',
  styleUrls: ['./offer-nav-bar.component.css']
})
export class OfferNavBarComponent implements OnInit {

  constructor(private eventDriver: EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllOffers() {
     this.eventDriver.publishEvent({typeAction: OfferActionsTypes.GET_ALL_OFFERS,payload:null})
  }

  onGetAvailableOffers() {
    this.eventDriver.publishEvent({typeAction: OfferActionsTypes.GET_AVAILABLE_OFFERS,payload:null})
  }

  onNewOffer() {

  }


}
