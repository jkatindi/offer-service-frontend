import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListOfferComponent} from "./list-offer/list-offer.component";
import {DetailOfferComponent} from "./detail-offer/detail-offer.component";
import {NewOfferComponent} from "./new-offer/new-offer.component";
import {UpdateOfferComponent} from "./update-offer/update-offer.component";

const routes: Routes = [
  {path:"list-offer",component:ListOfferComponent},
  {path:"detail-offer/:id",component:DetailOfferComponent},
  {path:"new-offer",component:NewOfferComponent},
  {path:"update-offer/:id",component:UpdateOfferComponent},
  {path: "", redirectTo: "/list-offer", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
