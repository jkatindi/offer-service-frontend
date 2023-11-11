import { Component } from '@angular/core';
import {ServiceOffer} from "./services/service.offer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobOfferApp';
  actions: Array<any>=[
    {title: "Home",route: "/home-offer",icon: "house text-success"},
    {title: "Avaible Job offer",route: "/list-offer",icon: "arrow-down-up text-success"},
    {title: "new Job Offer",route: "/new-offer",icon: "safe"},
    {title: "find offer",route: "/find-offer",icon: "search"}
   ];
  constructor(private serviceOffer: ServiceOffer) {
  }
}
