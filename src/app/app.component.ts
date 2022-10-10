import { Component } from '@angular/core';
import {ServiceOffer} from "./services/service.offer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobOfferApp';
  constructor(private serviceOffer: ServiceOffer) {
  }

  reacherch() {

  }
}
