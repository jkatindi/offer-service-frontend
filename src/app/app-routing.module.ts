import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOfferComponent} from "./offers/list-offer/list-offer.component";
import {DetailOfferComponent} from "./detail-offer/detail-offer.component";
import {NewOfferComponent} from "./offers/new-offer/new-offer.component";
import {UpdateOfferComponent} from "./offers/update-offer/update-offer.component";
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {OffersComponent} from "./offers/offers.component";

const routes: Routes = [

  {path:"home-offer",component: HomeComponent},
  {path:"offers",component: OffersComponent},
  {path:"list-offer",component:ListOfferComponent},
  {path:"detail-offer/:id",component:DetailOfferComponent},
  {path:"new-offer",component:NewOfferComponent},
  {path:"update-offer/:id",component:UpdateOfferComponent},
  {path:"nav-bar",component: NavBarComponent},
  {path: "", redirectTo: "/home-offer", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
