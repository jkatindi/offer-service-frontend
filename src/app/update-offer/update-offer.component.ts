import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ServiceOffer} from "../services/service.offer";

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.css']
})
export class UpdateOfferComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder,private offerService: ServiceOffer) {

  }

  ngOnInit(): void {
  }

}
